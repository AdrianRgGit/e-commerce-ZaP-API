const express = require("express");
const ReviewController = require("../controllers/ReviewController.js");
const router = express.Router();

const {
  authentication,
  isAdmin,
  isSuperAdmin
} = require("../middlewares/validations.js");

router.get("/showall", ReviewController.getAll);

router.post("/create", authentication, ReviewController.create);

router.put("/update/:id", authentication, isAdmin, ReviewController.update);

router.delete(
  "/delete/:id",
  authentication,
  isSuperAdmin,
  ReviewController.delete
);


module.exports = router;
