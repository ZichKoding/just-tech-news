const Sequelize = require('sequelize');

require('dotenv').config();

// create connecion to our database, pass in MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'ThisIsMyPasswordAndThereIsOnlyOneLikeIt', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;