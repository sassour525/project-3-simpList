var ListItem = require("../models/ListItem");

module.exports = {

  find: function (req, res) {
    ListItem.findOne(
      { _id: req.params.id }).then(function (foundListItem) {
        res.json(foundListItem)
      }).catch(function (err) {
        console.log(err);
        res.send("There was an error finding that list item");
      });
  },

  create: function (req, res) {
    var newListItem = new ListItem(req.body);

    ListItem.save().then(function (newListItem) {
      res.send("List item saved!")
    }).catch(function (err) {
      console.log(err);
      res.send("List item created")
    });
  },

  update: function (req, res) {
    ListItem.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function (updatedListItem) {
        res.send("list item updated");
      }).catch(function (err) {
        console.log(err);
        res.send("Error updated list item")
      })
  },

  destroy: function (req, res) {
    ListItem.remove(
      { _id: req.params.id })
      .then(function (removedListItem) {
        res.send("List item deleted")
      }).catch(function (err) {
        console.log(err);
        res.send("Error deleting list item")
      })
  }
};