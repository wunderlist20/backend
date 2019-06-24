const cool = require('cool-ascii-faces');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const todosRouter = require('../routers/todosRouter.js');
const authRouter = require('../routers/authRouter.js');
const usersRouter = require('../routers/usersRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/todos', todosRouter);
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


//server test
server.get('/', async (req, res) => {
    res.send(`Welcome to the Wunderlist 2.0 API. Local to production is NOW working!`)
});


// simple GET check that displays a random ascii face
server.get('/cool', (req, res) => {  // Deployment check
    res.send(cool());
});


module.exports = server;