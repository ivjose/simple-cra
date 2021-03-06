# Stage 1 - the build process
FROM node:8.11.3 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG REACT_APP_PATH
ARG REACT_APP_DOMAIN
ENV REACT_APP_API $REACT_APP_DOMAIN/$REACT_APP_PATH
ENV REACT_APP_IMAGE_UPLOAD_API $REACT_APP_DOMAIN/$REACT_APP_PATH
RUN echo "DEBUG": $REACT_APP_API

COPY package.json package-lock.json /usr/src/app/
RUN npm i
COPY . /usr/src/app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.15.5-alpine


RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
