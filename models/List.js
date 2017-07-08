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
    type: Schema.Types.ObjectId,
    required: true,
    ref:"User"
  },
  contributors: [{
      type: Schema.Types.ObjectId,
      ref: "User"
  }],
  listItems: {
    type: Array
  },
  comments: [{
      type: Schema.Types.ObjectId,
      ref: "Comments"
  }]
});

var List = mongoose.model("List", ListSchema);
module.exports = List;
