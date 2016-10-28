using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRentalApp
{
    public class User
    {
        private IMovieService _service;
        private String _username;

        public User(IMovieService service, String username)
        {
            _service = service;
            _username = username;
        }

        public String getMovies()
        {
//           return "[{}]";
            return _service.GetAllMovies();
        }

        public String getCurrentRentals()
        {
            //           return "[{}]";
            return _service.GetCurrentRentals(_username);
        }
    }
}
