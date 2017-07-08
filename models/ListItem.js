var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ListItemSchema = new Schema({
  name: {
    type: String
  },
  priority: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number
  },
  completed: {
    type: Boolean,
    default: false
  }

})

var ListItem = mongoose.model("ListItem", ListItemSchema);
module.exports = ListItem;