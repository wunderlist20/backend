const knex = require('knex');
const config = require('../knexfile.js');

// const dbEnvironment = process.env.NODE_ENV ||
//for testing and running SQLite
const dbEnvironment = process.env.DB_ENVIRONMENT || "development"; 

module.exports = knex(config[dbEnvironment]);