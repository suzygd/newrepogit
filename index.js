'use strict';

const client = require('./twitter-client')
const express = require('express')
const app = express()

const PORT_NUMBER = 3000;

app.get('/tweets', function(req, res) {
  client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
    res.status(200).send(JSON.stringify(tweets))
  })
})

app.listen(PORT_NUMBER);
