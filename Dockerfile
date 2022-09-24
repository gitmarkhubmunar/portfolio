FROM node:14-alpine AS portfolio-build

MAINTAINER 4006420+seidior@users.noreply.github.com

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add curl jq bash tzdata

RUN corepack enable && corepack prepare pnpm@$(curl -fsSL https://api.github.com/repos/pnpm/pnpm/releases/latest | jq ".tag_name" | sed 's/[v\"]//g') --activate

COPY package.json .
COPY pnpm-lock.yaml .
COPY ./local_modules ./local_modules

RUN pnpm fetch
RUN pnpm install --recursive --prefer-offline --frozen-lockfile

COPY . ./
RUN pnpm build


# production environment
FROM nginx:stable-alpine AS portfolio

RUN mkdir -p /var/www/thevisual.work

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
COPY server/default.conf /etc/nginx/conf.d/default.conf
COPY server/404.xhtml /var/www/default/404.xhtml

# Set up Nginx to serve the site as we wish
COPY server/thevisual.work.conf /etc/nginx/conf.d/thevisual.work.conf

# Copy the site's files to the proper place
COPY --from=portfolio-build /app/build /var/www/thevisual.work

# We'll worry about UDP ports in QUIC and HTTP/3 when it becomes relevant
EXPOSE 80/tcp
EXPOSE 443/tcp

# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
