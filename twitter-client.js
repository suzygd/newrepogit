'use strict';

const Twitter = require('twitter')
const client = new Twitter({
consumer_key: env.TWITTER_CONSUMER_KEY,
consumer_secret: env.TWITTER_CONSUMER_SECRET,
access_token_key: env.TWITTER_ACCESS_TOKEN_KEY,
access_token_secret: env.TWITTER_ACCESS_TOKEN_SECRET
});
module.exports = client
const env = require('./env')
const client = new Twitter (env);
