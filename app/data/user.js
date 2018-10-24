const data = require("./index");

const addUser = async (username, password, role) => {
  try {
    var user = await data.User.create({
      username: username,
      password: password,
      role: role || "default"
    });
  } catch (err) {
    throw err;
  }
  return user;
};

const listUsers = async () => {
  try {
    var users = await data.User.findAll();
  } catch (err) {
    throw err;
  }
  return users.map(user => user.dataValues);
};

const getUser = async id => {
  try {
    var user = data.User.findById(id);
  } catch (err) {
    throw err;
  }
  return user.dataValues;
};

exports.addUser = addUser;
exports.listUsers = listUsers;
exports.getUser = getUser;
