const Sequelize = require("sequelize");

const sequelize = new Sequelize("crud-interview", "user", "pass", {
    dialect: "sqlite",
    host: "./db.sqlite",
});

module.exports = sequelize;
//export default sequelize;