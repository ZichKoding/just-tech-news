const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if ('https://zichko-tech-news.herokuapp.com') {
    sequelize = new Sequelize('https://zichko-tech-news.herokuapp.com');
} else {
    sequelize = new Sequelize('just_tech_news_db', 'root', 'ThisIsMyPasswordAndThereIsOnlyOneLikeIt', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;