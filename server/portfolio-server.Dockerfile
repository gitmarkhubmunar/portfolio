FROM nginx:alpine AS portfolio_server

MAINTAINER 4006420+seidior@users.noreply.github.com

# Remove potential permissions problems with the logs
ARG USERID=1000
ARG GROUPID=1000
ENV USER_ID=$USERID
ENV GROUP_ID=$GROUPID
RUN apk --no-cache add shadow > /dev/null 2>&1 && \
    usermod -u $USER_ID nginx && \
    groupmod -g $GROUP_ID nginx

# 404 page for default server
RUN mkdir -p /var/www/default
COPY default.conf /etc/nginx/conf.d/default.conf
COPY 404.xhtml /var/www/default/404.xhtml

# Set up Nginx to serve the site as we wish
COPY thevisual.work.conf /etc/nginx/conf.d/thevisual.work.conf

# We'll worry about UDP ports in QUIC and HTTP/3 when it becomes relevant
EXPOSE 80/tcp
EXPOSE 443/tcp

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
