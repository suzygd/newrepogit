'use strict';

const express = require('express')
const Twitter = require('Twitter')

const PORT_NUMBER = 3000;

app.get('/tweets', function(req, res) {

	client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
	res.status(200).send(tweets)
	}

});

app.listen(PORT_NUMBER);
