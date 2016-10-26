using System;
using System.Collections.Generic;
using System.Net;
using System.Runtime.Serialization.Json;
using Newtonsoft.Json;

namespace MovieRentalApp
{
     class MovieService  : IMovieService
    {
        private String serviceBaseUrl = "http://hickory-snap.hyperdev.space/";

        public String GetAllMovies()
        {
            try
            {
                using (var webClient = new System.Net.WebClient())
                {
                    var json = webClient.DownloadString(serviceBaseUrl+"all");
                    return json;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public String GetCurrentRentals(string username)
        {
            using (WebClient wc = new WebClient())
            {
                return wc.DownloadString(serviceBaseUrl + "rentals?username="+username);
            }
        }

        public String RentMovie(string username, int movieId)
        {
            string json = "{json:{username:\""+username+"\", id:"+movieId+"}}";
            try { 
                using (WebClient wc = new WebClient())
                {
                    wc.Headers[HttpRequestHeader.ContentType] = "application/json";
                    return wc.UploadString(serviceBaseUrl+"rentMovie", json);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }

        public String AddMovie(string username, Movie movie)
        {
            string json = "{json:{username:\"" + username + "\", movie:" + movie+"}";
            Console.WriteLine(json);
            try
            {
                using (WebClient wc = new WebClient())
                {
                    wc.Headers[HttpRequestHeader.ContentType] = "application/json";
                    return wc.UploadString(serviceBaseUrl + "addMovie", json);
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }
    }
}