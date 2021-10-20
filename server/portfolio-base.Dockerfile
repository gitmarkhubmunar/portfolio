FROM node:alpine as portfolio_base

MAINTAINER 4006420+seidior@users.noreply.github.com

# Remove potential permissions problems with the logs
ARG USERID=1000
ARG GROUPID=1000
ENV USER_ID=$USERID
ENV GROUP_ID=$GROUPID

# Prep the directory before we clone the repo for the first time
RUN mkdir /app && chown $USER_ID:$GROUP_ID /app && \
    chmod 775 /app && \
    mkdir -p /var/www/thevisual.work && \
    chown $USER_ID:$GROUP_ID /var/www/thevisual.work

# Grab git so we can clone the repo
RUN apk add git > /dev/null 2>&1

# Run everything from this point forward as a normal user
USER $USER_ID:$GROUP_ID

# Clone the repository
WORKDIR /app
RUN git clone https://github.com/seidior/portfolio.git . > /dev/null 2>&1

# Install the Node dependencies and cache them for faster updates
RUN yarn install --silent > /dev/null 2>&1
