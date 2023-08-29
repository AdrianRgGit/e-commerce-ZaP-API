const express = require("express");
const UserController = require("../controllers/UserController.js");
const router = express.Router();

const {
  authentication,
  alreadyLogged,
  isSuperAdmin,
} = require("../middlewares/validations.js");

router.get("/showall", UserController.getAll);
router.get(
  "/showuserregistered",
  authentication,
  UserController.getUserRegistered
);
router.post("/createuser", UserController.createUser);
router.post(
  "/createadmin",
  authentication,
  isSuperAdmin,
  UserController.createAdmin
);
router.post(
  "/createsuperadmin",
  authentication,
  isSuperAdmin,
  UserController.createSuperAdmin
);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);


//localhost:8080/users/login
//localhost:8080/users/login

module.exports = router;
