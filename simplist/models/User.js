var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    user_name:{
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
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;