var express = require("express");

var userController = require("../controllers/userController");

var router = new express.Router();


router.get("/:id", userController.find);

router.get("/ownedlists/:userId", userController.findList);

router.get("/alllists/:userId", userController.findAllList);

router.get("/sharedlists/:userId", userController.sharedLists);

router.post("/", userController.create);

router.put("/:id", userController.update);

router.delete("/:id", userController.destroy);

module.exports = router;