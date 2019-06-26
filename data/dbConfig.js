const knex = require('knex');
const config = require('../knexfile.js');

const dbEnvironment = process.env.NODE_ENV;

module.exports = knex(config[dbEnvironment]);