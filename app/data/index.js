const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "./database.sqlite"
});

const User = sequelize.define("user", {
  username: { type: Sequelize.STRING, unique: true },
  password: Sequelize.STRING,
  role: Sequelize.STRING
});

exports.db = sequelize;
exports.User = User;
