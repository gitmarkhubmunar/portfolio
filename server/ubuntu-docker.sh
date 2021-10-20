#!/usr/bin/env bash

## Jeff's Docker-based Server Setup v1.0
## Spencer Wohlers

## This script gets a brand new Ubuntu Server ready to host Jeff's portfolio.

# Stop if any errors occur
set -e

OUT_LOG="/tmp/deploy_setup_$(date +'%Y%m%d%H%M').log"
ERR_LOG="/tmp/deploy_setup_$(date +'%Y%m%d%H%M')_err.log"

# Grab the appropriate user and uid
USER=$SUDO_USER
USER_ID=$SUDO_UID
GROUP_ID=$SUDO_GID
HOME=$( getent passwd $SUDO_USER | cut -d: -f6 )

# Set destination dir and timezone
PORTFOLIO_DIR=$HOME/portfolio
[[ -z "${TZ}" || "$TZ" == "" ]] && export TZ=America/Los_Angeles
HOSTNAME="thevisual.work"

# Set Ubuntu version for Docker
U_CN=$(lsb_release --codename | cut -f2)
[[ "$U_CN" == "impish" ]] && U_CN=hirsute

# Docker variables
D_REPO="https://download.docker.com/linux/ubuntu"
D_GPG="$D_REPO/gpg"
D_LGPG="/usr/share/keyrings/docker-archive-keyring.gpg"
D_ARCH=$(dpkg --print-architecture)
D_APT="/etc/apt/sources.list.d/docker.list"

# Apt packages
U_PKG=("docker" "docker.io" "docker-compose" "containerd" "runc")
D_PPKG=("apt-transport-https" "ca-certificates" "curl" "gnupg" "lsb-release")
D_PKG=("docker-ce" "docker-ce-cli" "containerd.io")

# Docker compose variables
DC_BASE="https://github.com/docker/compose/releases/download"
DC_LATEST_VER="1.29.2"
DC_INST="docker-compose-$(uname -s)-$(uname -m)"
DC_URL="$DC_BASE/$DC_LATEST_VER/$DC_INST"

# Don't prompt the user during execution
DEBIAN_FRONTEND=noninteractive

# update the system
echo -e "\n (1/15) Updating apt cache."
[ -f $D_APT ] && rm $D_APT
apt-get update >>$OUT_LOG 2>>$ERR_LOG
echo " (2/15) Installing system updates."
apt-get dist-upgrade -y >>$OUT_LOG 2>>$ERR_LOG

# install CLI niceties
echo " (3/15) Installing system tools."
apt-get install net-tools openssh-server logrotate -y >>$OUT_LOG 2>>$ERR_LOG

# configure CLI niceties
echo " (4/15) Setting system info."
hostnamectl set-hostname $HOSTNAME >>$OUT_LOG 2>>$ERR_LOG
hostnamectl set-chassis server >>$OUT_LOG 2>>$ERR_LOG
timedatectl set-timezone $TZ >>$OUT_LOG 2>>$ERR_LOG

# Docker's installation instructions
echo " (5/15) Removing Docker, if installed."
apt-get remove ${U_PKG[*]} -y -m >>$OUT_LOG 2>>$ERR_LOG
echo " (6/15) Docker installation pre-requisites."
apt-get install ${D_PPKG[*]} -y >>$OUT_LOG 2>>$ERR_LOG
echo " (7/15) Adding Docker's apt repository."
[ ! -f $D_LGPG ] && curl -fsSL $D_GPG | gpg --dearmor -o $D_LGPG
echo "deb [arch=$D_ARCH signed-by=$D_LGPG] $D_REPO $U_CN stable" > $D_APT
echo " (8/15) Updating apt cache."
apt-get update >>$OUT_LOG 2>>$ERR_LOG
echo " (9/15) Installing Docker from official repository."
apt-get install ${D_PKG[*]} -y >>$OUT_LOG 2>>$ERR_LOG

# "Install" Docker Compose
echo "(10/15) Installing Docker Compose."
curl -L $DC_URL -o /usr/local/bin/docker-compose >>$OUT_LOG 2>>$ERR_LOG
chmod +x /usr/local/bin/docker-compose

# Docker post-installation instructions
echo "(11/15) Setting default group for $USER to docker."
usermod -g docker $USER >>$OUT_LOG 2>>$ERR_LOG

echo -e "(12/15) Setting Docker env vars."
DOCKER_GID=$(cut -d: -f3 < <(getent group docker))
# Prep for firstrun
export ENV_VARS=("TZ=$TZ"
          "USER_ID=$USER_ID"
          "GROUP_ID=$DOCKER_GID"
          "HTTP_PORT=80"
          "HTTPS_PORT=443")

rm -f $PORTFOLIO_DIR/.env
for i in "${ENV_VARS[@]}"; do echo "$i" >> $PORTFOLIO_DIR/.env; done

echo -e "(13/15) Setting up daily script."
TPL_D="$HOME/portfolio/daily-maintenance.tpl.sh"
SCR_D="$HOME/portfolio/daily-maintenance.sh"

if [ -f $TPL_D ]
then
  envsubst '${HOME} ${SUDO_USER}' <$TPL_D >$SCR_D
  chmod +x $SCR_D
  rm -f $TPL_D
fi

CRON_LN="/etc/cron.daily/portfolio-maintenance"
[ -e $CRON_LN ] && rm $CRON_LN
ln -s $HOME/portfolio/daily-maintenance.sh $CRON_LN

echo -e "(14/15) Changing permissions."
chown -R $USER:docker $HOME/certs $HOME/logs $HOME/portfolio

echo -e "(15/15) Adding deploy-web to /usr/local/bin"
DEPLOY_LN="/usr/local/bin/deploy-web"
[ -e $DEPLOY_LN ] && rm $DEPLOY_LN
ln -s $HOME/portfolio/deploy-web.sh $DEPLOY_LN

echo -ne "\n"
