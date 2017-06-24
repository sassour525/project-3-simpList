var express = require("express");

var userController = require("../controllers/userController");

var router = new express.Router();


router.get("/:id", userController.find);

router.post("/", userController.create);

router.put("/:id", userController.update);

router.delete("/:id", userController.destroy);

module.exports = router;