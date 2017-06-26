var express = require("express");

var commentsController = require("../controllers/commentsController");

var router = new express.Router();

router.get("/:id", commentsController.find);

router.post("/", commentsController.create);

router.put("/:id", commentsController.update);

router.delete("/:id", commentsController.destroy);

module.exports = router;