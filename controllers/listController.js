var List = require("../models/List");

module.exports = {

    find: function (req, res) {

        List.findOne(
            { _id: req.params.id }).then(function (foundList) {
                res.json(foundList);
            }).catch(function (err) {
                res.send("There was an error finding that list")
            })

    },

    create: function (req, res) {
        var newList = new List(req.body);

        newList.save().then(function (createdList) {
            res.send("The list has been created")
        }).catch(function (err) {
            console.log(err);
            res.send("There was an error creating the list!")
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