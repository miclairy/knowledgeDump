FROM node:16-alpine3.15 AS dev
ENV NODE_ENV development

RUN mkdir /knowledge-dump/
WORKDIR /knowledge-dump/
COPY ./package.json .
COPY ./yarn.lock .
COPY . .
RUN yarn
RUN yarn build

# RUN yarn start --> don't use this as it has default arguements only
# ENTRYPOINT [ "yarn", "start", "--host", "0.0.0.0" ] # for when you want to run a dev build


FROM nginx:stable-alpine AS production
ENV NODE_ENV production
EXPOSE 80

COPY --from=dev /knowledge-dump/dist /pancake/
COPY --from=dev /knowledge-dump/ngnix.conf /etc/nginx/nginx.conf
# no node modules needed

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
