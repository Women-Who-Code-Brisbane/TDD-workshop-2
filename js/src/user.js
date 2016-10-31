module.exports = function User (service, username, isAdmin) {
  var module = {};

  this.service = service;
  this.username = username;
  this.isAdmin = isAdmin;

  module.getAllMovies = function (callback) {
    return service.getAllMovies(callback);
  };
  module.getCurrentRentals = function (callback) {
    service.getCurrentRentals(this.username, callback);
  };
  module.addMovie = function (movie, callback) {
    if (!this.isAdmin) {
      callback("Only admins can add movies", null);
    }
    service.addMovie(movie, callback);
  };
  module.rentMovie = function (movieID, callback) {
    service.rentMovie(this.username, movieID, callback);
  };
  return module;
};