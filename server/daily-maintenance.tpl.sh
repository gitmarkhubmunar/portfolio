#!/usr/bin/env bash

sudo -u $SUDO_USER -H \
    /bin/bash -c "deploy-web renew &>> $HOME/logs/deploy/deploy-web.log"
sudo -u $SUDO_USER -H \
    /bin/bash -c "deploy-web renew &>> $HOME/logs/deploy/deploy-web.log"
