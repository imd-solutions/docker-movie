FROM node:16.18.1-alpine
RUN mkdir -p /data
WORKDIR /data
COPY package.json /data
RUN npm install -g json-server
COPY . /data
CMD json-server --watch /data/db.json --port 4000 --host 0.0.0.0