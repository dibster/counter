const supertest = require("supertest"),
      should = require("should");

// This agent refers to PORT where program is runninng.

const server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("User API Tests" ,function(){

  it("should try and add an Invalid User",function(done){

    const invalidUser = {
      email : 'dave@dave.com',
      id : 'string'
    }

    server
    .post("/users")
    .send(invalidUser)
    .expect("Content-type",/json/)
    .expect(500)
    .end(function(err,res){
      res.status.should.equal(500);
      done();
    });
  });

  it("should add a User",function(done){

    const validUser = {
      email : 'dave@dave.com',
      id : 310
    }

    server
    .post("/users")
    .send(validUser)
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      console.log(res.body);
      done();
    });
  });

  it("should return a user",function(done){

    server
    .get("/users/310")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      res.status.should.equal(200);
      res.body.length.should.equal(1);
      res.body.record.email.should.equal('dave@dave.com');

      done();
    });
  });

  it("should not return a user",function(done){

    server
      .get("/users/999")
      .expect("Content-type",/json/)
      .expect(200) // THis is HTTP response
      .end(function(err,res){
        res.status.should.equal(404);
        done();
      });
  });

});
