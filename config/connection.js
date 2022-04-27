const sequelize = require('sequelize');

const sequelize = new sequelize('forumfeed_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;