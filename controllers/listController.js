var List = require("../models/List");

module.exports = {

    find: function (req, res) {

        List.find({})
            .exec(function (err, doc) {

                if (err) {
                    console.log(err);
                }
                else {
                    res.send(doc);
                }

            });

    },

    create: function (req, res) {
        var newList = new List(req.body);

        console.log(req.body);

        newList.save(function (err, doc) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(doc);
            }
        });
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