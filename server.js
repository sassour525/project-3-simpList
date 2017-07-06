const express = require("express");
const bodyParser = require("body-parser");
const bluebird = require("bluebird");
const logger = require("morgan");
let mongoose = require("mongoose");

//const jwt = require("express-jwt");
//const jwks = require('jwks-rsa');

mongoose.Promise = bluebird;

const routes = require("./routes/routes");

const app = module.exports = express();
const PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV !== "test"){
  app.use(logger("dev"));
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('./public'));
app.use("/", routes);

//DB configuration
// -------------------------------------------------

if (process.env.MONGODB_URI) {
    mongoose = mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose = mongoose.connect("mongodb://localhost/simplist");
}

var db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    app.listen(PORT, function () {
        console.log("Connected to mongoose. App listening on PORT: " + PORT);
    });
});