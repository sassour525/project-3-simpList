var Comments = require("../models/Comments");

module.exports = {
  find: function (req, res) {
    Comments.findOne(
      { _id: req.params.id }).then(function (foundComment) {
        res.json(foundComment);
      }).catch(function (err) {
        console.log(err);
        res.send("There was an error finding that comment")
      })
  },

  create: function (req, res) {
    var newComment = new Comments(req.body);

    newComment.save().then(function (createdComments) {
      res.send("The comment has been created!");
    }).catch(function (err) {
      console.log(err);
      res.send("There was an error creating the comment")
    });
  },

  update: function (req, res) {
    Comments.findOneAndupdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function (updatedComments) {
        res.send("The comment has been updated!")
      }).catch(function (err) {
        res.send("There was an error updating the comment")
      })
  },

  destroy: function (req, res) {
    Comments.remove(
      { _id: req.params.id }).then(function (deletedComment) {
        res.send("Comment deleted!");
      }).catch(function (err) {
        console.log(err);
        res.send("There was an error deleting the comment")
      })
  }
}