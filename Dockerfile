FROM node:18-alpine
WORKDIR /library
COPY . .
RUN npm install
CMD ["node", "./server/server.js"]