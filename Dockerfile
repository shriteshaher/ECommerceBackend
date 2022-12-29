

FROM node:14
WORKDIR /seller
COPY package*.json ./
RUN npm install 
COPY . . 
CMD npm start