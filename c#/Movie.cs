using System;
using Newtonsoft.Json;

namespace MovieRentalApp
{
    public class Movie
    {
        int id;
        int categoryId;
        String title;
        bool isNew;

        public Movie(string title, int categoryId, bool isNew)
        {
            this.title = title;
            this.categoryId = categoryId;
            this.isNew = isNew;
        }

        public override String ToString()
        {
            return "{title:\""+title+"\", category:"+categoryId+", isNew:"+isNew+"}";
        }
    }
}