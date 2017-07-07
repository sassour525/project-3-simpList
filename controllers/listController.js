var List = require("../models/List");

module.exports = {

    find: function (req, res) {
        console.log("This is your req param:" + req.params.id);
        List.findOne({_id: req.params.id})
            .then(function(list) {
            res.json(list);
        }).catch(function(err) {
            console.log(err);
            res.send("There was an error");
        });

    },

    findAll: function(req, res) {
        List.find({}).then(function(allList) {
            res.json(allList);
        }).catch(function(err) {
            console.log(err);
            res.send("There was an error");
        });
    },

    create: function (req, res) {
        var newList = new List(req.body);
        console.log(req.body);
        newList.save().then(function (createdList) {
           
                res.send("The list has been created")
            /* User.findOneAndUpdate(
                 { _id: req.body.userId },
                 { $set: { user_lists: createdList._id } }).then(function (updatedUser) {
                     res.send("The list has been created")
                 }).catch(function (err) {
                     console.log(err);
                     res.send("There was an error creating the list!")
                 })
         }).catch(function (err) {
             console.log(err);
             res.send("There was an error creating the list!")
         })*/
        }).catch(function (err) {
             console.log(err);
             res.send("There was an error creating the list!")
         })
    },

    update: function(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}).then(function (updatedList) {
            res.send("The list has been updated!")
        }).catch(function (err) {
            res.send("There was an error updating the list")
        })
    },

    destroy: function(req, res) {

        var id = req.params.id;

        List.find({ _id: id }).remove().exec(function (err) {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Deleted");
            }
        });
    }

}