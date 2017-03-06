const express = require('express');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const routers = require('./router');

const app = express();

// Db setup
mongoose.connect(config.dbConnection);
mongoose.Promise = global.Promise;

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
routers(app);

// Server setup
const server = http.createServer(app);
server.listen(config.port, () => {
    console.log(`server listenning on: ${config.port}`);
});

