var express = require("express");
var bodyParser = require("body-parser");
var bluebird = require("bluebird");
var logger = require("morgan");
var mongoose = require("mongoose");

// var List = require("./models/List.js");
// var ListItem = require("./models/ListItem.js");
// var User = require("./models/User.js");
// var Comments = require("./models/Comments/js");

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


// // Routes
// // -------------------------------------------------

// app.get('/api', function(req,res){
//     List.find({}).exec(function(err,doc){
//         var lists = [];
//         doc.forEach(function(lists){
//             lists.push({
//                 title:lists.title,
//                 date:lists.date,
//                 owner:lists.owner,
//                 contributors:lists.contributors,
//                 listItems:lists.listItems,
//                 comments:lists.comments
//             });
//         });
//         res.send(lists);
//     });
// }); 

// app.post('/api', function(req,res){
//     List.create({
//         listId:req.body.id,
//         title:req.body.title,
//         date:req.body.date,

//     })
// });