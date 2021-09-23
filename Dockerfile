FROM node:12-alpine as build
ENV PATH /node_modules/.bin:$PATH
ENV NODE_OPTIONS --max_old_space_size=8192
COPY assets components layouts middleware pages static store nuxt.config.js package.json /
RUN npm install --silent --no-update-notifier && npm install @vue/cli -g && npm run generate

FROM nginx:1.21.3-alpine
COPY --from=build /dist /opt/web
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx
COPY nginx/conf.d /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
