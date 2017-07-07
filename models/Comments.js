var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

var Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;