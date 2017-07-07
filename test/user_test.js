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
          user_name: "Test User",
          first_name: "Test",
          last_name: "Last name test",
          email: "Test@test.com",
          password: "1234"
        }

        var initialUser = new User(initialUser);

        initialUser.save().then(function (initialUser) {
            chai.request(server)
            .get("/user/"+initialUser._id)
            .end(function(err, res){
              res.should.have.status(200);
              res.body.should.be.a("object");
              res.body.should.have.property("user_name").eql("Test User");
              done();
            });
        });
    });
    it("Creates a user", (done) => {
        var newUser = {
          user_name: "Test User",
          first_name: "Test",
          last_name: "Last name test",
          email: "Test@test.com",
          password: "1234"
        }
        chai.request(server)
            .post("/user")
            .send(newUser)
            .end(function (err, res) {
                res.should.have.status(200);
                res.text.should.eql("The user has been created!");
                done();
            })
    });
    it("Updates an existing User", (done) => {
        var initialUser = {
          user_name: "Test User",
          first_name: "Test",
          last_name: "Last name test",
          email: "Test@test.com",
          password: "1234"
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
          user_name: "Test User",
          first_name: "Test",
          last_name: "Last name test",
          email: "Test@test.com",
          password: "1234"
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