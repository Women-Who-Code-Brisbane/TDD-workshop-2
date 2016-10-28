using System;
using System.Collections.Generic;
using TDD_Mocking_Workshop;

namespace MovieRentalApp
{
    public interface IMovieService
    {
        String GetAllMovies();
        String GetCurrentRentals(String username);
        String RentMovie(String username, int movieId);
        String AddMovie(String username, Movie movie);

    }
}
