var express = require("express");
var path = require("path");
var router = new express.Router();

var userRoutes = require("./userRoutes");
var commentsRoutes = require("./commentsRoutes");
var listRoutes = require("./listRoutes");
var listItemRoutes = require("./listItemRoutes");

router.use("/user", userRoutes);
router.use("/comments", commentsRoutes);
router.use("/list", listRoutes);
router.use("/listitem", listItemRoutes);

module.exports = router;