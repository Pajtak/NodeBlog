const Sequelize = require("sequelize");

const connection = new Sequelize("blognodejs", "root", "naboo9191", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
