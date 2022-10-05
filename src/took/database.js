const { Sequelize } = require('sequelize');
//const config = require('../config');

//? Create a connection to database
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'davc0012',
    database: 'users_crud'
});

module.exports = { db };