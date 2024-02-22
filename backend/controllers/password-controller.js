const { User, Sequelize, sequelize } = require("../database/models");
const bcrypt = require("bcrypt");

// set user password
async function setUserPassword(req, res, next) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 11);

    user.password = hashedPassword;

    await user.save();

    req.hashedPassword = hashedPassword;
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
}

module.exports = {
  setUserPassword,
};
