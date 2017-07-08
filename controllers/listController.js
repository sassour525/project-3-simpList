var List = require("../models/List");
var User = require("../models/User");
module.exports = {

    find: function (req, res) {
        console.log("This is your req param:" + req.params.id);
        List.findOne({ _id: req.params.id })
            .then(function (list) {
                res.json(list);
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error");
            });

    },

    findAll: function (req, res) {
        List.find({}).then(function (allList) {
            res.json(allList);
        }).catch(function (err) {
            console.log(err);
            res.send("There was an error");
        });
    },

    findByUser: function (req, res) {
        List.find(
            { owner: req.params.userId }).then(function (userLists) {
                res.json(userLists)
            }).catch(function (err) {
                res.send("There was an error finding lists associated with that user")
            })
    },

    create: function (req, res) {
        var newList = new List(req.body);
        console.log(req.body);

        newList.save().then(function (createdList) {
            User.findOneAndUpdate(
                { _id: createdList.owner },
                { $push: { user_lists: createdList._id } }).then(function (updatedUser) {
                    res.send("The list has been created")
                }).catch(function (err) {
                    console.log(err);
                    res.send("There was an error creating the list!")
                })
        }).catch(function (err) {
            console.log(err);
            res.send("There was an error creating the list!")
        })
    },

    share: function (req, res) {
        console.log(req.body.name);
        User.findOneAndUpdate(
            { name: req.body.name },
            { $push: { shared_lists: req.body.listId } }).then(function (updatedShared) {
                if(updatedShared){
                    res.send("The list has been shared");
                }else{
                    res.send("No user matches that name")
                }
            }).catch(function (err) {
                res.send("There was an error sharing the list")
            })
    },

    update: function (req, res) {
        List.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }).then(function (updatedList) {
                res.send("The list has been updated!")
            }).catch(function (err) {
                res.send("There was an error updating the list")
            })
    },

    destroy: function (req, res) {

        Remove.remove({ _id: req.params.id })
            .then(function (deletedList) {
                res.send("The list has been deleted!")
            }).catch(function (err) {
                console.log(err);
                res.send("There was an error deleted the list.")
            });
    }

}