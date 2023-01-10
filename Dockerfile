FROM node:18-alpine
WORKDIR /library
COPY . .
RUN npm run postinstall
CMD ["node", "./server/server.js"]