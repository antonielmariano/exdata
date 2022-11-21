FROM node:latest

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]