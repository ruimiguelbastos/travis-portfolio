FROM node:16-alpine as build-step
WORKDIR /frontend
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
