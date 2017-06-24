var express = require("express");
var bodyParser = require("body-parser");
var bluebird = require("bluebird");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = bluebird;

var routes = require("./routes/routes");

var app = module.exports = express();
var PORT = process.env.PORT || 3000;

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

if(process.env.MONGODB_URI){
    mongoose.connect(MONGODB_URI);
}
else{
    mongoose.connect("mongodb://localhost/simplist");
}

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  app.listen(PORT, function () {
        console.log("Connected to mongoose. App listening on PORT: " + PORT);
    });
});

//CRUD API routes
//--------------------------------------------------

app.get("/api/lists", function(req, res) {

  ListModel.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

app.post("/api/lists", function(req, res) {
  var newList = new ListModel(req.body);

  console.log(req.body);

  newList.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.delete("/api/lists/", function(req, res) {

  var url = req.param("url");

  ListModel.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});