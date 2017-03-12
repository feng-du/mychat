const express = require('express');
const http = require('http');
const config = require('./config');
const socket = require('./socket.io');

const app = express();

// server setup
const server = http.createServer(app);
server.listen(config.port, () => {
    console.log(`Server listenning on: ${config.port}`);
});

socket.start(server);
