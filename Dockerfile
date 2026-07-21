# Velan Travels - static site container
# Base: lightweight, production-grade web server for static assets
FROM nginx:alpine

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy static site into nginx's default web root
COPY index.html /usr/share/nginx/html/
COPY style.css  /usr/share/nginx/html/
COPY app.js     /usr/share/nginx/html/

# nginx listens on 80 by default
EXPOSE 80

# Base image's default CMD already runs nginx in the foreground -
# kept explicit here for clarity/documentation
CMD ["nginx", "-g", "daemon off;"]
