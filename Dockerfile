FROM nginx:1.19.10-alpine
COPY /dist/angular-nginx-csp /usr/share/nginx/html

RUN sed -i -e "s/ media=\"print\" onload=\"this.media='all'\"//g" /usr/share/nginx/html/index.html

COPY /nginx/nginx.conf /etc/nginx/nginx.conf