'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

// use nano to connect to quotation db
const nano = require('nano')('http://admin:couchdb@localhost:5984');
const quotations = nano.use('quotations');

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
  res.send('What the hell is this endpoint doing? 这是干甚么用？大意了啊！');
});

app.post('/quotation', (req, res) => {
  const payload = {
    number: _.get(req, 'body.number'),
    keywords: _.get(req, 'body.keywords'),
    createdTimestamp: new Date().getTime(),
    modifiedTimestamp: new Date().getTime(),
  }
  quotations.insert(payload).then((body) => {
    res.status(201).send(body)
  }).catch((err) => {
    console.log(`Cannot insert quotation: ${err}`)
    res.status(500).send(err)
  })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
