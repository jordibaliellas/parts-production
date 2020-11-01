FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

COPY ./ /app
RUN npm install
RUN npm run build

RUN npm install -g serve

# start app
CMD ["serve", "-s", "build", "-l", "3000"]