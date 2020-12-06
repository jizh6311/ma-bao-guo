FROM node:12.16.1-buster
RUN node -v
RUN npm -v

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package-lock.json package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
EXPOSE 3000
CMD [ "npm", "start" ]
