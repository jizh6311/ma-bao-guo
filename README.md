# ma-bao-guo
A generator for Ma Bao Guo's quotations - 马保国语录生成器

## Build docker image
```
docker build -t ma-bao-guo:1.0 .
```

## Run docker container
Start docker containers for backend and database services by `docker-compose up`

## CouchDB
Create one database to store all the versions of `马保国语录`:

`curl -X PUT http://admin:couchdb@127.0.0.1:5984/quotations`

For more cURL commands of CouchDB, see its [document](https://docs.couchdb.org/en/stable/intro/curl.html)
