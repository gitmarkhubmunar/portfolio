#!/usr/bin/env bash

## Jeff's deploy script v4.0
## Spencer Wohlers

## Here's what we're gonna do. Grab the latest copy of the portfolio from
## Github. Rebuild it using yarn. Swap out the directory.

GIT_BASE_DIR=/home/jeff
GIT_SUBDIR=portfolio
BUILD_DIR=build
SRV_BASE_DIR=/var/www
SRV_SUBDIR=thevisual.work
CHOWN_USER=jeff
CHOWN_GROUP=www-data
GH_MASTER="https://github.com/gitmarkhubmunar/portfolio.git"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

if [ -d $GIT_BASE_DIR/$GIT_SUBDIR ]; then
  
  echo "Grabbing latest copy of repository from Github."
  cd $GIT_BASE_DIR/$GIT_SUBDIR
  git pull &>/dev/null
  
else
  
  echo "That's concerning. I don't see your repository."
  echo "Oh well. Let's rebuild it."
  
  cd $GIT_BASE_DIR
  git clone $GH_MASTER $GIT_SUBDIR &>/dev/null
  cd $GIT_SUBDIR
  yarn install --ignore-engines &>/dev/null
  
fi

echo "Installing/upgrading packages."
cd $GIT_BASE_DIR/$GIT_SUBDIR
yarn install --ignore-engines &>/dev/null

echo "Building production-ready site."
yarn build &>/dev/null

echo "Moving updated site into place."
chmod 775 build
chown -R $CHOWN_USER:$CHOWN_GROUP build
rm -rf $SRV_BASE_DIR/$SRV_SUBDIR
mv build $SRV_BASE_DIR/$SRV_SUBDIR

exit 0;
