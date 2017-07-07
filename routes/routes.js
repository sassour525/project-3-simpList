var express = require("express");
var path = require("path");
var router = new express.Router();

var userRoutes = require("./userRoutes");
var commentsRoutes = require("./commentsRoutes");
var listRoutes = require("./listRoutes");

router.use("/user", userRoutes);
//router.use("/comments", commentsRoutes);
router.use("/list", listRoutes);

// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

module.exports = router;