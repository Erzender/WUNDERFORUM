const data = require("./app/data");
const models = require("./app/data/_models");
const express = require("express");
const app = express();
const business = require("./app/business");

data.db.sync().then(() => {
  models.User.listUsers().then(users => console.log(users));
  business.server.setup().then(res => console.log(res));
  business.user.register("lol", "prout").then(res => console.log(res));
  app.listen(process.env.PORT || 8080);
});
