FROM node:15.5.1-alpine3.10
WORKDIR /cook-pod-front

COPY package.json /cook-pod-front/package.json
COPY package-lock.json /cook-pod-front/package-lock.json
RUN npm install

COPY . /cook-pod-front

CMD npm run dev

EXPOSE 3000
