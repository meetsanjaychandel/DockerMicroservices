FROM node:18
WORKDIR /usr/app/suzukiApp
COPY listenerservice/package*.json ./
RUN npm install 
COPY listenerservice/ .
EXPOSE 4000
CMD ["node", "index.js"]