const models = require("../data/_models");

const register = async (username, password) => {
  if (username.length < 2) {
    return "username_too_short";
  }
  if (password.length < 8) {
    return "pw_too_short";
  }
  try {
    await models.User.addUser(username, password);
  } catch (err) {
    console.error(err);
    return "db_err";
  }
  return true;
};

exports.register = register;
