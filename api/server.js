const cool = require('cool-ascii-faces');
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


// simple GET check that displays a random ascii face
server.get('/cool', (req, res) => {  // Deployment check
    res.send(cool());
});


module.exports = server;