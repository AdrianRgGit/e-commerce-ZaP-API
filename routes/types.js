const express = require("express");
const TypeController = require("../controllers/TypeController.js");
const router = express.Router();

const {
  authentication,
  isSuperAdmin,
} = require("../middlewares/validations.js");

router.get("/showall", TypeController.getAll);
router.get("/showallwithshoes", TypeController.getAllWithShoes);
router.get("/showbyid/:id", TypeController.getById);
router.get("/showbyname/:name", TypeController.getByName);

router.post("/create", authentication, isSuperAdmin, TypeController.create);

router.put("/update/:id", authentication, isSuperAdmin, TypeController.update);

router.delete(
  "/delete/:id",
  authentication,
  isSuperAdmin,
  TypeController.delete
);

module.exports = router;
