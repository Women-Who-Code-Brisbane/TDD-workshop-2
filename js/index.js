var service = require('./src/movieService');

service.getAllMovies(function(err, data){
  console.log('getAllMovies', err || data);
});
service.getCurrentRentals('dom', function(err, data){
  console.log('getCurrentRentals', err || data);
});
service.rentMovie('dom', 1, function(err, data){
  console.log('rentMovie', err || data);
});
service.addMovie('admin', {title:'new movie', categoryId:1, isNew:true}, function(err, data){
  console.log('addMovie', err || data);
});
service.addMovie('dom', {title:'new movie', categoryId:1, isNew:true}, function(err, data){
  console.log('addMovie', err || data);
});
