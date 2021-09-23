FROM node:current-alpine3.11 as build
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
COPY package.json /build/package.json
RUN npm install --silent --no-update-notifier
RUN npm install @vue/cli -g
COPY . /build
RUN npm run generate

FROM nginx:1.21.3-alpine
COPY --from=build /build/dist /opt/web
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx
COPY nginx/conf.d /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
