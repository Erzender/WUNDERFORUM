const models = require("../data/_models");

const setup = async () => {
  try {
    var users = await models.User.listUsers();
  } catch (err) {
    throw err;
  }
  if (users.length > 0) {
    return false;
  }
  try {
    await models.User.addUser("admin", "admin", "admin");
  } catch (err) {
    throw err;
  }
  return true;
};

exports.setup = setup;
