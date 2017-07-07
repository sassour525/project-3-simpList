var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  user_name: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
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