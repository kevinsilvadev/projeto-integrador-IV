FROM node:16.10.0-alpine3.14

USER root

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm","start"]