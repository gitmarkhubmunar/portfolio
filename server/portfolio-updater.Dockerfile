FROM portfolio_base as portfolio_updater

MAINTAINER 4006420+seidior@users.noreply.github.com

# Remove potential permissions problems with the logs
ARG USERID=1000
ARG GROUPID=1000
ENV USER_ID=$USERID
ENV GROUP_ID=$GROUPID
USER $USER_ID:$GROUP_ID

# Where to store the built files to serve with Nginx
ARG BUILD_PATH="/var/www/thevisual.work"

# Install any added modules and build a new copy of the site
WORKDIR /app
RUN git pull --rebase=false > /dev/null 2>&1
RUN yarn install --silent > /dev/null 2>&1 && yarn build --silent > /dev/null 2>&1

# Move the built files into a volume so we can just attach later without copying
VOLUME /var/www/thevisual.work
