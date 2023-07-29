const { User, Order, Shoe, Sequelize, Token } = require("../models/index.js");
const { Op } = Sequelize;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const UserController = {
  async getAll(req, res) {
    try {
      const getAllUsers = await User.findAll();
      res.status(200).send(getAllUsers);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
      });
    }
  },

  async getUserRegistered(req, res) {
    try {
      const getUsers = await User.findOne({
        where: {
          id: req.user.id,
        },

        include: [
          {
            model: Order,
            attributes: ["id", "order_date", "amount"],
            include: [
              {
                model: Shoe,
                through: { attributes: [] },
              },
            ],
          },
        ],
      });

      console.warn(req.user.id);
      res.send({ msg: "User: ", getUsers });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        error: "Server error. An error occurred while executing the action",
      });
    }
  },

  // getUserOrder

  async createUser(req, res, next) {
    try {
      req.body.role = "user";
      const password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ ...req.body, password });
      res.status(201).send({ msg: "Usuario creado con éxito", user });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async createAdmin(req, res, next) {
    try {
      req.body.role = "admin";
      const password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ ...req.body, password });
      res.status(201).send({ msg: "Usuario creado con éxito", user });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async createSuperAdmin(req, res, next) {
    try {
      req.body.role = "superadmin";
      const password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ ...req.body, password });
      res.status(201).send({ msg: "Usuario creado con éxito", user });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        return res.status(400).send({ msg: "Incorrect username or password" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({ msg: "Incorrect username or password" });
      }

      const token = jwt.sign({ id: user.id }, jwt_secret, {
        /* expiresIn: "60000", */
      });
      await Token.create({ token, UserId: user.id });
      res.send({ msg: "Successful login", token, user });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ msg: "Successfully disconnected" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "There was a problem trying to disconnect you" });
    }
  },
};

module.exports = UserController;
