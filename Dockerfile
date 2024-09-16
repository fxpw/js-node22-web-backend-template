FROM node:22

WORKDIR /usr/src/app


COPY package*.json ./
RUN npm install

EXPOSE 5000

# запускаем или тестовую или билдим для прода
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then node ./src/main.js; else npx nodemon --inspect=0.0.0.0:9229 ./src/main.js; fi"]