FROM node:15.5.1-alpine3.10
WORKDIR /react-tutorial

COPY package.json /react-tutorial/package.json
COPY package-lock.json /react-tutorial/package-lock.json
RUN npm install

COPY . /react-tutorial

CMD npm run dev

EXPOSE 3000
