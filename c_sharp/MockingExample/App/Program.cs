using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MovieRentalApp;

namespace TDD_Mocking_Workshop
{
    class Program
    {
        static void Main(string[] args)
        {
            var service = new MovieService();
            Console.WriteLine( service.GetAllMovies() );
            Console.WriteLine( service.GetCurrentRentals("dom") );
            Console.WriteLine( service.RentMovie("dom", 1));
            Console.WriteLine( service.AddMovie("dom", new Movie("new movie", 1, true)));
            Console.WriteLine( service.AddMovie("admin", new Movie("new movie", 1, true)));
        }
    }
}
