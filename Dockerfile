FROM node:14.16.1 as build
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
ENV URL_HOST ${URL_HOST}
COPY nuxt.config.js package.json /build/
COPY assets /build/assets/
COPY components /build/components/
COPY directives /build/directives/
COPY layouts /build/layouts/
COPY middleware /build/middleware/
COPY mixins /build/mixins/
COPY modules /build/modules/
COPY pages /build/pages/
COPY plugins /build/plugins/
COPY static /build/static/
COPY store /build/store/
RUN yarn add update-notifier
RUN yarn add vue-load-image
RUN yarn install
RUN yarn run generate

FROM nginx:1.21.3-alpine
COPY --from=build /build/dist /opt/web
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/conf.d/ /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
