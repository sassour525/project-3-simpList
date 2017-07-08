//This should prevent morgan from being run in the testing environment
process.env.NODE_ENV = 'test';

//dependencies needed for the test to run
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();
var server = require("../server");
chai.use(chaiHttp);

var mongoose = require("mongoose");

var User = require("../models/User");

describe("User tests", () => {
    beforeEach((done) => {
        User.remove({}).then(function (deletedUser) {
            done();
        })
    });
    it("GETS a user", (done) => {
        var initialUser = {
            "sub": "auth0|595d96fecc49715253d530cd",
            "name": "test@test.com",
            "nickname": "test",
            "picture": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
            "updated_at": "2017-07-08T01:53:19.603Z"
        }

        var initialUser = new User(initialUser);

        initialUser.save().then(function (initialUser) {
            chai.request(server)
                .get("/user/" + initialUser._id)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("name").eql("test@test.com");
                    done();
                });
        });
    });
    it("Creates a user", (done) => {
        var newUser = {
            "sub": "auth0|595d96fecc49715253d530cd",
            "name": "test@test.com",
            "nickname": "test",
            "picture": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
            "updated_at": "2017-07-08T01:53:19.603Z"
        }
        chai.request(server)
            .post("/user")
            .send(newUser)
            .end(function (err, res) {
                console.log(res.body)
                res.should.have.status(200);
                res.body.should.have.property("_id");
                done();
            })
    });
    it("Updates an existing User", (done) => {
        var initialUser = {
            "sub": "auth0|595d96fecc49715253d530cd",
            "name": "test@test.com",
            "nickname": "test",
            "picture": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
            "updated_at": "2017-07-08T01:53:19.603Z"
        }

        var initialUser = new User(initialUser);

        initialUser.save().then(function (initialUser) {
            var changedUser = {
                user_name: "Changed name",
                email: "Changed email"
            }

            chai.request(server)
                .put("/user/" + initialUser._id)
                .send(changedUser)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.text.should.eql("The user has been updated!");
                    done();
                })
        })
    });
    it("Deletes a user", (done) => {
        var initialUser = {
            "sub": "auth0|595d96fecc49715253d530cd",
            "name": "test@test.com",
            "nickname": "test",
            "picture": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
            "updated_at": "2017-07-08T01:53:19.603Z"
        }
        var initialUser = new User(initialUser);

        initialUser.save().then(function (initialUser) {
            chai.request(server)
                .delete("/user/" + initialUser._id)
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.text.should.eql("User deleted!");
                    done();
                })
        });
    })
});