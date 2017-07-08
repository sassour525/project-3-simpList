var User = require("../models/User");

module.exports = {

    find: function (req, res) {
        User.findOne(
            { _id: req.params.id })
            .then(function (foundUser) {
                res.json(foundUser);
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error finding that user")
            })
    },
    findList: function (req, res) {
        User.findOne(
            { _id: req.params.userId }).populate("associated_lists")
            .then(function (userWithLists) {
                res.json(userWithLists)
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error finding that user")
            })
    },

    findAllList: function (req, res) {
        User.findOne(
            { _id: req.params.userId }).populate("associated_lists shared_lists")
            .then(function (userWithAllLists) {
                res.json(userWithAllLists)
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error finding that user and all lists")
            })
    },
    sharedLists: function (req, res) {
        User.findOne(
            { _id: req.params.userId }).populate("shared_lists")
            .then(function (userWithSharedLists) {
                res.json(userWithSharedLists.shared_lists)
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error finding that user and shared lists")
            })
    },
    create: function (req, res) {
        console.log("the request create sub is: " + req.body.sub)
        User.findOne(
            {sub: req.body.sub}).then(function(foundUser){
                console.log("here: found user" + foundUser);
                if(foundUser){
                    res.json({alreadyExist: true, _id: foundUser._id})
                }else{
                    var newUser = new User(req.body);

                    newUser.save().then(function(createdUser){
                        res.json({_id: createdUser._id})
                    }).catch(function(err){
                        console.log(err);
                        res.send("There was an error creating the user")
                    })
                }
            }).catch(function(err){
                console.log(err);
                res.send("There was an error creating the user")
            })
        /*User.findOne(
            { sub: req.body.sub }).then(function (foundUser) {
                console.log(foundUser);
                if (foundUser) {
                    res.json({alreadyExist: true, _id: foundUser._id})
                } else {
                    var newUser = new User(req.body);

                    newUser.save().then(function (createdUser) {
                        res.json({ _id: createdUser._id });
                    }).catch(function (err) {
                        console.log(err);
                        res.send("There was an error creating the user")
                    });
                }
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error creating the user")
            });*/
    },

    update: function (req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }).then(function (updatedUser) {
                res.send("The user has been updated!")
            }).catch(function (err) {
                res.send("There was an error updating the user")
            })
    },

    destroy: function (req, res) {
        User.remove(
            { _id: req.params.id }).then(function (deletedUser) {
                res.send("User deleted!");
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error deleting the user")
            })
    }
}