const express = require("express");
const ShoeController = require("../controllers/ShoeController");
const router = express.Router();
const {
  authentication,
  isAdmin,
  isSuperAdmin,
} = require("../middlewares/validations.js");

router.get("/showall", ShoeController.getAll);
router.get("/showallwithtypes", ShoeController.getAllWithType);
router.get("/showalldesc", ShoeController.getAllDesc);
router.get("/showallasc", ShoeController.getAllAsc);
router.get("/showbyid/:id", ShoeController.getById);
router.get("/showbybrand/:brand", ShoeController.getByBrand);
router.get("/showbyprice/:price", ShoeController.getByPrice);

router.post("/create", authentication, isAdmin, ShoeController.create);

router.put("/update/:id", authentication, isAdmin, ShoeController.update);

router.delete("/delete/:id", authentication, isSuperAdmin, ShoeController.delete);

module.exports = router;
