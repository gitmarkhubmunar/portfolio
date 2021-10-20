#!/usr/bin/env bash

## Jeff's deploy script v5.0
## Spencer Wohlers

## This script uses Docker to build, serve, and maintain a production-ready
## version of Jeff's portfolio website.

set -e

CMD="$1"
[[ -z "$CMD" ]] && CMD="setup"

GH="https://raw.githubusercontent.com/gitmarkhubmunar/portfolio/master/server"

files_prereq=("ubuntu-docker.sh"
              "deploy-web.sh"
              "portfolio-base.Dockerfile"
              "portfolio-updater.Dockerfile"
              "portfolio-server.Dockerfile"
              "docker-compose.yml"
              "docker-compose.certbot.yml"
              "thevisual.work.conf"
              "daily-maintenance.tpl.sh"
              "default.conf"
              "404.xhtml")

SETUP_DIRS=("certs" "portfolio")
LOG_DIRS=("certbot" "docker" "nginx")
CB_DC="docker-compose.certbot.yml"

LOGS="$HOME/logs/deploy/deploy-web.log"

update_site () {
  shutdown_server
  start_server
}

ssl_cert () {
  if [ ! -f ~/certs/linode.ini ]
  then
    echo "You need to place linode.ini in ~/certs first."
    exit 1
  fi
  
  echo -n "Getting an SSL certificate from Let's Encrypt... "
  docker-compose -f $CB_DC run --rm certbot-$1 &>> $LOGS
  echo "done."
  
  docker volume prune -f &>> $LOGS
  docker volume rm certs-certbot logs-certbot &>> $LOGS
  docker network prune -f &>> $LOGS
}

update_images () {
  echo "Removing base images." >> $LOGS
  docker image rm -f "node:alpine" "certbot/dns-linode" "nginx:alpine" &>> $LOGS

  echo "Updating portfolio base image." >> $LOGS
  docker-compose build --no-cache --pull base &>> $LOGS
  
  echo "Restarting server." >> $LOGS
  shutdown_server &>> $LOGS
  start_server &>> $LOGS
  
  echo "Pruning system." >> $LOGS
  docker system prune -f &>> $LOGS
}

setup_server () {
  echo -e "\nGrabbing and running latest copy of server setup script."
  echo -e "You will be prompted for your password.\n"
  
  for i in "${SETUP_DIRS[@]}"; do sudo rm -rf "$HOME/$i"; done
  for i in "${SETUP_DIRS[@]}"; do mkdir -p "$HOME/$i"; done
  for i in "${LOG_DIRS[@]}"; do mkdir -p "$HOME/logs/$i"; done

  cd $HOME/portfolio
  
  for i in "${files_prereq[@]}"; do wget -q "$GH/$i"; done
  chmod +x *.sh

  sudo ./ubuntu-docker.sh
  
  echo "Server is set up. Copy the following file into place:"
  echo -e "\t~/certs/linode.ini\n"
  echo "Then, log out or reboot, log back in, and execute:"
  echo -e "\tdeploy-web firstrun\n"
}

start_server () {
  echo -n "Building images, if necessary... "
  docker-compose build &>> $LOGS
  echo "done."
  
  echo -n "Starting portfolio server... "
  docker-compose up -d --force-recreate &>> $LOGS
  
  echo "done. Serving on ports $HTTP_PORT and $HTTPS_PORT."
}

shutdown_server () {
  OUTFILE="$HOME/logs/docker/$(date +'%Y%m%d%H%M%S')_stop.log"
  
  echo -n "Shutting down portfolio server... "
  docker-compose down -v --remove-orphans &>> $LOGS
  echo -ne "done.\nRemoving updater/server images... "
  docker image rm -f portfolio_server portfolio_updater &>> $LOGS
  echo "done."
}

run_cmd () {
  cd $HOME/portfolio
  source .env
  
  case "$1" in
    firstrun)
      ssl_cert init
      start_server
    ;;
    update)
      update_site
    ;;
    restart)
      update_site
    ;;
    images)
      update_images
    ;;
    cert)
      ssl_cert init
    ;;
    renew)
      ssl_cert renew
    ;;
    stop)
      shutdown_server
    ;;
    start)
      start_server
    ;;
    hello)
      echo "Hello there, $USER! How's your day?"
    ;;
    *)
      echo -n "Usage: deploy-web [setup|firstrun|start|stop|images|"
      echo -e "update|restart|cert|renew]\n"
      exit 1
    ;;
  esac
}

log_init () {
  if [ ! -d $HOME/logs/deploy ]
  then
    mkdir -p $HOME/logs/deploy
    
    echo -e "$HOME/logs/deploy {" >> $HOME/logs/logrotate.conf
    echo -e "\tdaily\n\trotate 4\n\tcreate" >> $HOME/logs/logrotate.conf
    echo -e "\tcompress\n\tdelaycompress" >> $HOME/logs/logrotate.conf
    echo -e "}" >> $HOME/logs/logrotate.conf
  else
    logrotate -s $HOME/logs/logrotate.status $HOME/logs/logrotate.conf
  fi
  
  echo "--" >> $LOGS
  echo -n "[$(date +'%Y%m%d%H%M%S')] deploy-web invoked " >> $LOGS
  
  if [ -n "$1" ]
  then
    echo -e "with param $1." >> $LOGS
  else
    if [ -n "$CMD" ]
    then
      echo -e "with deploy command $DEPLOY_CMD." >> $LOGS
    else
      echo -e "with no param or command." >> $LOGS
    fi
  fi
  
  echo "--" >> $LOGS
}

if [ $(id -u) -eq 0 ]
then
  echo "Adding docker system user group."
  groupadd --system docker
  
  echo "Creating user jeff."
  useradd -c "Jeff Munar" -g docker -G sudo -m -N -s /bin/bash jeff

  echo "Enter password for user jeff:"
  passwd jeff
  
  echo "Alright, now log in as that user and re-run this script."
  echo "Remember to add the following information first:"
  echo "- host keys for sshd"
  echo "- authorized keys for root and jeff"
  echo "- any valid ssl certs"

  exit 0
fi

log_init

case "$CMD" in
setup)
  setup_server | tee -a $LOGS
;;
*)
  run_cmd $CMD | tee -a $LOGS
;;
esac

echo -ne "\n" >> $LOGS

exit 0
