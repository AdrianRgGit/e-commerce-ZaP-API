const { User, Token, Sequelize } = require("../models");
const { Op } = Sequelize;
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, jwt_secret);
    const user = await User.findByPk(payload.id);
    const tokenFound = await Token.findOne({
      where: {
        [Op.and]: [{ UserId: user.id }, { token: token }],
      },
    });
    if (!tokenFound) {
      return res
        .status(401)
        .send({ msg: "The token entered is incorrect or empty" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ error, msg: "There was a problem trying to disconnect you" });
  }
};

const isAdmin = async (req, res, next) => {
  const admins = ["admin", "superadmin"];
  if (admins.includes(req.user.role)) {
    next();
  } else {
    return res.status(403).send({
      msg: "You don't have enough permissions to perform this action",
    });
  }
};

const isSuperAdmin = async (req, res, next) => {
  if (req.user.role == "superadmin") {
    next();
  } else {
    return res.status(403).send({
      msg: "You don't have enough permissions to perform this action",
    });
  }
};

const alreadyLogged = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
    include: [Token],
  });

  if (user.Tokens.length < 1) {
    next();
  } else {
    return res.send({
      msg: "You are already logged",
    });
  }
};

module.exports = { authentication, isAdmin, isSuperAdmin, alreadyLogged };
