var User = require("../models/User");

module.exports = {

    find: function(req, res){
        User.findOne(
            {_id: req.params.id})
            .then(function(foundUser){
                res.json(foundUser);
            }).catch(function(err){
                console.log(err);
                res.send("There was an error finding that user")
            })
    },

    create: function (req, res) {
        var newUser = new User(req.body);

        newUser.save().then(function (createdUser) {
            res.send("The user has been created!");
        }).catch(function (err) {
            console.log(err);
            res.send("There was an error creating the user")
        });
    },

    update: function(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}).then(function (updatedUser) {
            res.send("The user has been updated!")
        }).catch(function (err) {
            res.send("There was an error updating the user")
        })
    },

    destroy: function(req, res){
        User.remove(
            {_id: req.params.id}).then(function(deletedUser){
                res.send("User deleted!");
            }).catch(function(err){
                console.log(err);
                res.send("There was an error deleting the user")
            })
    }
}