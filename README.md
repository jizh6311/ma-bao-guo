# ma-bao-guo
A generator for Ma Bao Guo's quotations - 马保国语录生成器

## Background
Who is Ma Bao Guo?

[This video](https://www.youtube.com/watch?v=09NYiVVmnJE) originated from the Chinese making fun of a scam 'Taichi Master' Ma Bao Guo 马保国.
Yep, this is one of the most popular memes in China.

## Build docker image
### Build backend image:
```
docker build -t ma-bao-guo-backend:1.0 .
```
### Build frontend image:
```
docker build -t ma-bao-guo-dashboard:1.0 ./dashboard
```

## Run docker container
Start docker containers for backend, frontend and database services by `docker-compose up`

## CouchDB
Create one database to store all the versions of `马保国语录`:

`curl -X PUT http://admin:couchdb@127.0.0.1:5984/quotations`

For more cURL commands of CouchDB, see its [document](https://docs.couchdb.org/en/stable/intro/curl.html)

## API document
### Create a new quotation
POST `/quotation`

Request body example:
```
{
    "id": "2", \\ id should be a string
    "keywords": ["dfs2", "dfsfs2", "大意了2"]
}
```

### Update an existing quotation
PUT `/quotation`

Request body example:
```
{
    "id": "1", \\ the id of the existing quotation
    "rev": "1-6c3132fa05b4c69717093f28e755e7d9", \\ the rev of the existing quotation
    "keywords": ["dfs2", "dfsfs2", "耗子喂汁"]
}
```

### Get all quotations
GET `/quotations`

Response body example:
```
[
  {
    id: "1",
    key: "1",
    value: {
      rev: "2-e44a8648cfc7f80599d21b46c5b47695"
    }
},
  {
    id: "2",
    key: "2",
    value: {
      rev: "3-13b4c27abe1c4846e05691386c130736"
    }
  }
]
```

### Get a quotation by id
GET `/quotations/:id`

Response body example:
```
{
  _id: "1",
  _rev: "2-e44a8648cfc7f80599d21b46c5b47695",
  keywords: [
    "dfs2",
    "dfsfs2",
    "耗子喂汁"
  ],
  modifiedTimestamp: 1607821791454
}
```

### Delete a quotation by id
DELETE `/quotations/:id/:rev`
