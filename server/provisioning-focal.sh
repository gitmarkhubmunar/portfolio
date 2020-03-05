#!/bin/bash

## provisioning-eoan.sh 1.0
## Spencer Wohlers

## This script takes a fresh Ubuntu Server 19.10 "Eoan Ermine" install and
## configures it for use as a server for The Visual, Jeff's portfolio website.

## Differences over Bionic Beaver:
## - switch to nginx over apache
## - switch to non-privileged user
## - switch to apt instead of apt-get
## - TLS 1.3 support

TOTAL_STEPS=13
OUTPUT_LOG=output.log
ERROR_LOG=error.log
EXPECTED_ERRORS=15
USER_NAME=$(whoami)
PRODUCTION=false

sudo echo ""

# Stop and remove Apache
echo "( 1/$TOTAL_STEPS) Removing Apache, if present."
sudo apt remove apache2 -y >>$OUTPUT_LOG 2>>$ERROR_LOG

# Install required packages
echo "( 2/$TOTAL_STEPS) Updating Ubuntu from regular repositories."
sudo apt update >>$OUTPUT_LOG 2>>$ERROR_LOG
sudo apt dist-upgrade -y >>$OUTPUT_LOG 2>>$ERROR_LOG
sudo apt autoremove -y >>$OUTPUT_LOG 2>>$ERROR_LOG

echo "( 3/$TOTAL_STEPS) Installing software."
sudo apt install build-essential git linux-headers-generic net-tools nginx npm node-gyp openssh-server python3-certbot-nginx software-properties-common -y >>$OUTPUT_LOG 2>>$ERROR_LOG

# Add user to group
echo "( 4/$TOTAL_STEPS) Adding user '$USER_NAME' to group 'www-data'."
sudo usermod -a -G www-data $USER_NAME

# Setup destination HTML directory
echo "( 5/$TOTAL_STEPS) Setting up production HTML directory."
sudo rm -rf /var/www
sudo mkdir -p /var/www/thevisual.work
sudo chown -R $USER_NAME:www-data /var/www
sudo chmod -R 0775 /var/www

# Grab latest copy of repository
echo "( 6/$TOTAL_STEPS) Grabbing latest copy of repository."
git clone https://github.com/gitmarkhubmunar/portfolio.git ~/portfolio >>$OUTPUT_LOG 2>>/dev/null

echo "( 7/$TOTAL_STEPS) Installing portfolio node dependencies."
cd ~/portfolio
npm install >>$OUTPUT_LOG 2>>/dev/null

# Generate self-signed certificate
echo "( 9/$TOTAL_STEPS) Generating self-signed certificate."
echo "US
California
San Francisco
The Visual
.
thevisual.dev
jeff@thevisual.work" | sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/thevisual.key -out /etc/ssl/certs/thevisual.crt >>$OUTPUT_LOG 2>>/dev/null

# Setup Apache configuration
echo "(10/$TOTAL_STEPS) Configuring Nginx."
sudo rm /etc/nginx/sites-available/*
sudo rm /etc/nginx/sites-enabled/*
sudo mkdir -p /etc/nginx/sites-available
sudo mkdir -p /etc/nginx/sites-enabled
sudo chown -R $USER_NAME /etc/nginx/sites-available
sudo chown -R $USER_NAME /etc/nginx/sites-enabled
sudo chown -R $USER_NAME /etc/nginx/snippets
if [[ PRODUCTION = true ]]
then
    cp /home/jeff/portfolio/server/thevisual-nginx-prod.conf /etc/nginx/sites-available/thevisual.conf
else
    cp /home/jeff/portfolio/server/thevisual-nginx-test.conf /etc/nginx/sites-available/thevisual.conf
fi
ln -s /etc/nginx/sites-available/thevisual.conf /etc/nginx/sites-enabled/thevisual.conf
cp /home/jeff/portfolio/server/common-nginx.conf /etc/nginx/snippets/common.conf
cp /home/jeff/portfolio/server/ssl-nginx.conf /etc/nginx/snippets/ssl.conf

# Prepare the website
echo "(11/$TOTAL_STEPS) Running website setup script."
chmod +x /home/jeff/portfolio/server/deploy-web.sh
~/portfolio/server/deploy-web.sh >>$OUTPUT_LOG 2>>$ERROR_LOG

# Open the firewall ports
echo "(12/$TOTAL_STEPS) Enabling firewall and opening ports."
sudo ufw allow ssh >>$OUTPUT_LOG 2>>$ERROR_LOG
sudo ufw allow http >>$OUTPUT_LOG 2>>$ERROR_LOG
sudo ufw allow https >>$OUTPUT_LOG 2>>$ERROR_LOG
echo "y" | ufw enable >>$OUTPUT_LOG 2>>$ERROR_LOG

# Bring up the website
echo "(13/$TOTAL_STEPS) Starting Nginx."
sudo systemctl start nginx >>$OUTPUT_LOG 2>>$ERROR_LOG

echo ""

NUM_ERRORS=$(cat error.log | wc -l)

if (( NUM_ERRORS > EXPECTED_ERRORS )); then
    echo "Something may have gone wrong."
    echo "I saw $NUM_ERRORS more lines of error than expected."
    echo "Check $ERROR_LOG for details."
else
    echo "Everything looks good. Check $OUTPUT_LOG for additional details."
    echo "Please reboot the system as soon as possible."
fi
