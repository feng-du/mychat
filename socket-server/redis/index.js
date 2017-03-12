const redis = require('redis');
const Promise = require('bluebird');
const config = require('../config');

Promise.promisifyAll(redis);

const redisClient = redis.createClient(config.redis.port, config.redis.host);

exports.redisClient = redisClient;