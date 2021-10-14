FROM node:lts as build
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
COPY nuxt.config.js package.json /build/
COPY assets /build/assets/
COPY components /build/components/
COPY layouts /build/layouts/
COPY middleware /build/middleware/
COPY pages /build/pages/
COPY static /build/static/
COPY store /build/store/
RUN yarn add update-notifier
RUN yarn install
RUN yarn run generate

FROM nginx:1.21.3-alpine
COPY --from=build /build/dist /opt/web
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/conf.d/ /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
