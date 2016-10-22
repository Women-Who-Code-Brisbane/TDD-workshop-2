var request = require('request');

function MovieService () {
  var serviceBaseUrl = 'http://hickory-snap.hyperdev.space/';

  this.getAllMovies = function (callback) {
    request.get(
      serviceBaseUrl + 'all',
      function (err, res, json) {
        if (err) {
          callback(err)
        } else if (res.statusCode == 200) {
          callback(null, json);
        } else {
          callback("Unexpected status code: " + res.statusCode);
        }
      }
    );
  };
  this.getCurrentRentals = function (username, callback) {
    request.get(
      serviceBaseUrl + 'rentals?username=' + username,
      function (err, res, json) {
        if (err) {
          callback(err)
        } else if (res.statusCode == 200) {
          callback(null, json);
        } else {
          callback("Unexpected status code: " + res.statusCode);
        }
      }
    );
  };

  this.addMovie = function (username, movie, callback) {
    request.post(
      serviceBaseUrl + 'addMovie',
      {json: { username: username, movie: movie } },
      function (err, res, json) {
        if (err) {
          callback(err)
        } else if (res.statusCode == 200) {
          callback(null, json);
        } else {
          callback("Unexpected status code: " + res.statusCode);
        }
      }
    );
  };
  this.rentMovie = function (username, movieId, callback) {
    request.post(
      serviceBaseUrl + 'rentMovie',
      { json: { username: username, id: movieId } },
      function (err, res, json) {
        if (err) {
          callback(err)
        } else if (res.statusCode == 200) {
          callback(null, json);
        } else {
          callback("Unexpected status code: " + res.statusCode);
        }
      }
    );
  };
}
module.exports = new MovieService();
