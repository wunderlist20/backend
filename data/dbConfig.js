const knex = require('knex');
const config = require('../knexfile.js');

const dbEnvironment = process.env.DB_Environment || "development";

module.exports = knex(config[dbEnvironment]);