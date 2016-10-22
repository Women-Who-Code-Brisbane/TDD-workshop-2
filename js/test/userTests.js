var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var user = require('../src/user.js');

describe('Regular User', function () {
  it('should have a method to list all movies', function () {
    expect(user.getAllMovies).to.be.a('function');
  });
  it('should have a method to rent a movie', function () {
    expect(user.rentMovie).to.be.a('function');
  });
  it('should have a method to list current rentals', function () {
    expect(user.getCurrentRentals).to.be.a('function');
  });

  describe('List all movies', function(){
    // add code here
  });
  describe('Rent a Movie', function(){
    // add code here
  });
  describe('List current rentals', function(){
    // add code here
  });
});