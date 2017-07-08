var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sub: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  nickname: {
    type: String
  },
  updated_at: {
    type: Date
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  user_lists: [{
    type: Schema.Types.ObjectId,
    ref: "List"
  }],
  shared_lists: [{
    type: Schema.Types.ObjectId,
    ref: "List"
  }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;