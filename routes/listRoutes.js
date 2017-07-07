var express = require("express");

var listController = require("../controllers/listController");

var router = new express.Router();

router.get("/all", listController.findAll);

router.get("/:id", listController.find);

router.get("/user/:userId", listController.findByUser);

router.post("/", listController.create);

router.post("/share", listController.share);

router.put("/:id", listController.update);

router.delete("/:id", listController.destroy);

module.exports = router;