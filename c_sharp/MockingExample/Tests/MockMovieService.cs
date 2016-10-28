using System;
using MovieRentalApp;

namespace Tests
{
    public class MockMovieService : IMovieService
    {
        public string AddMovie(string username, Movie movie)
        {
            throw new NotImplementedException();
        }

        public string GetAllMovies()
        {
            return "[{}]";
        }

        public string GetCurrentRentals(string username)
        {
            throw new NotImplementedException();
        }

        public string RentMovie(string username, int movieId)
        {
            throw new NotImplementedException();
        }
    }
}