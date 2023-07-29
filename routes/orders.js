const express = require("express");
const OrderController = require("../controllers/OrderController.js");
const router = express.Router();

const {
  authentication
} = require("../middlewares/validations.js");

router.get("/showall", OrderController.getAll);
router.post("/create", authentication, OrderController.create);

module.exports = router;
