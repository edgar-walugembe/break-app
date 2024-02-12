const { User, Sequelize, sequelize } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create new User
async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).send({ user });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

// get all users
async function fetchAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).send({ users });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

// delete a user
async function deleteUser(req, res, next) {
  try {
    const userId = req.query.id;

    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      await user.destroy();
      return res.status(202).send(`user id: ${userId} deleted successfully`);
    } else {
      return res.status(404).send(`user id: ${userId} not found`);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ err });
  }
}

// edit a user
async function editUser(req, res, next) {
  try {
    const userId = parseInt(req.query.id);

    const editedData = req.body;

    const [editedRows] = await User.update(editedData, {
      where: { id: userId },
    });

    const editedUser = await User.findOne({ where: { id: userId } });

    if (editedRows === 0) {
      return res.status(304).send(`user id: ${userId} not changed`);
    } else {
      return res.status(202).send({
        message: `user id: ${userId} updated successfully`,
        user: editedUser,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
}

// set user password
async function setUserPassword(req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 11);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
}

// login user
async function loginUser(req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 11);

    const isMatch = await bcrypt.compare(req.body.password, hash);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error });
  }
}

module.exports = {
  createUser,
  deleteUser,
  editUser,
  fetchAllUsers,
  loginUser,
  setUserPassword,
};
