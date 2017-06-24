//This should prevent morgan from being run in the testing environment
process.env.NODE_ENV = 'test';

//dependencies needed for the test to run
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();
var server = require("../server");

var mongoose = require("mongoose");

describe("initial test", () => {
    it("Should test as true", (done)=>{
        true.should.eql(true);
        done();
    });
});