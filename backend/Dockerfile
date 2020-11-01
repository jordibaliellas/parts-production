FROM node:10.13-alpine

RUN mkdir -p /var/www/backend
WORKDIR /var/www/backend

COPY ./ /var/www/backend

RUN npm install
RUN npm run build

CMD ["node", "./dist/index.js"]

