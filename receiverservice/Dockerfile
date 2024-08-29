FROM node:18
WORKDIR /usr/app/suzukiApp
COPY receiverservice/package*.json ./
RUN npm install 
COPY receiverservice/ .
EXPOSE 3000
CMD ["node", "index.js"]