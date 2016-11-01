var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var sinon = require('sinon');

describe('Regular User', function () {


  it('should have a method to list all movies', function () {

    // create a stub for the service
    var service = {
      getAllMovies: function(callback){
        callback(null, [{title:'Alien'}, {title:'Alien2'}]);
      }
    };
    // inject stub in user constructor
    var user = require('../src/user.js')(service, "Dominique", false);

    user.getAllMovies(function(err,data){
      expect(err).to.equal(null);
      expect(data).to.not.equal(null);
      expect(data.length).to.equal(2);
      expect(data[0].title).to.equal('Alien');
      expect(data[1].title).to.equal('Alien2');
    });
  });

  it('should have a method to list all movies with Mock service', function(){
    // create a mock
    var movieService = require('../src/movieService');
    var mockService = sinon.mock(movieService);
    // define the mock's expected behavior
    mockService.expects("getAllMovies").once();
    //inject into user
    var user = require('../src/user.js')(mockService.object, "Dominique", false);

    user.getAllMovies(function(err, data){
      // checks that the mock behaved as expected: should not output "Real service was called"
      mock.verify();
    });
  });

  it('should have a method to rent a movie', function () {
  });
  it('should have a method to list current rentals', function () {
  });
});