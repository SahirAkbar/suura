FROM node:18.17.1-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm i 
RUN npm i express --save
#RUN npm i zod-error --save

#RUN npm install react-loader-spinner --force

COPY . /usr/src/app/
#RUN npm run build

EXPOSE 3000

CMD ["pm2", "app.js"]
