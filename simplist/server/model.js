var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ListSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  owner: {
    userId: String,
    firstName: String,
    lastName: String
  },
  contributors: [{
      userId: String,
      firstName: String,
      lastName: String,
      adminAccess: Boolean
  }],
  listItems: [{
      itemName: String,
      priority: Boolean,
      order: Number,
      completed: Boolean
  }],
  comments: [{
      body: String,
      date: Date,
      author: String
  }]
});

var ListModel = mongoose.model("ListModel", ListSchema);
module.exports = ListModel;