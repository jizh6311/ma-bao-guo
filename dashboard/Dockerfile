FROM node:12
RUN node -v
RUN npm -v

# Create app directory
RUN mkdir -p /usr/src/dashboard
WORKDIR /usr/src/dashboard

COPY package-lock.json package.json /usr/src/dashboard/
RUN npm install
CMD [ "npm", "run", "build" ]
COPY . /usr/src/dashboard/
EXPOSE 8080
CMD [ "npm", "run", "serve" ]
