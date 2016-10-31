var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();


describe('Regular User', function () {

  // create a stub for the service
  var service = {
    getAllMovies: function(callback){
      callback(null, [{title:'Alien'}, {title:'Alien2'}]);
    }
  };
  // inject stub in user constructor
  var user = require('../src/user.js')(service, "Dominique", false);

  it('should have a method to list all movies', function () {
    user.getAllMovies(function(err,data){
      expect(err).to.equal(null);
      expect(data).to.not.equal(null);
      expect(data.length).to.equal(2);
      expect(data[0].title).to.equal('Alien');
      expect(data[1].title).to.equal('Alien2');
    });


  });
  it('should have a method to rent a movie', function () {
  });
  it('should have a method to list current rentals', function () {
  });
});