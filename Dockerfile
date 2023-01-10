FROM node:18
WORKDIR /library
COPY . .
RUN npm run postinstall
EXPOSE 3000
CMD ["node", "./server/server.js"]