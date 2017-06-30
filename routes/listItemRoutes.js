var express = require("express");

var commentsController = require("../controllers/commentsController");

var router = new express.Router();

router.get("/:id", listItemController.find);

router.post("/", listItemController.create);

router.put("/:id", listItemController.update);

router.delete("/:id", listItemController.destroy);

module.exports = router;