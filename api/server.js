const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


//server test
server.get('/', async (req, res) => {
    res.send(`Welcome to the Wunderlist 2.0 API!`)
});

module.exports = server;