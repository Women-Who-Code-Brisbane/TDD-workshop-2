var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var admin = require('../src/admin.js');

// disabled admin tests: rename 'xdescribe' to 'describe' to enable again
xdescribe('Admin User', function () {
  it('should have a method to add a movie', function () {
    expect(admin.addMovie).to.be.a('function');
  });
  describe('Add a Movie', function () {
    it('should return false when called with no argument', function () {
      expect(admin.addMovie()).to.equal(false);
    });
    it('should return false when trying to add an empty movie object', function () {
      expect(admin.addMovie({})).to.equal(false);
    });
    it('should return false when trying to add a movie with no title', function () {
      var movie = { category: 'Comedy', isNew: true };
      expect(admin.addMovie(movie)).to.equal(false);
    });
    it('should return false when trying to add a movie with an empty title', function () {
      var movie = { title: '', category: 'Comedy', isNew: true };
      expect(admin.addMovie(movie)).to.equal(false);
    });
    it('should return false when trying to add a movie with no category', function () {
      var movie = { title: 'A funny movie', isNew: true };
      expect(admin.addMovie(movie)).to.equal(false);
    });
    it('should return false when trying to add a movie with an empty category', function () {
      var movie = { title: 'A funny movie', category: '', isNew: true };
      expect(admin.addMovie(movie)).to.equal(false);
    });
    it('should return false when trying to add a movie without specifying if it is a new release', function () {
      var movie = { title: 'A funny movie', category: 'Comedy' };
      expect(admin.addMovie(movie)).to.equal(false);
    });
    it('should return an id when adding a valid movie', function () {
      var movie = { title: 'A funny movie', category: 'Comedy', isNew: true };
      expect(admin.addMovie(movie)).to.be.a('string');
    });
  });
});