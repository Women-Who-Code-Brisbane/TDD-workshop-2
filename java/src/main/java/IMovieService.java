import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public interface IMovieService {

    JSONObject getAllMovies() throws IOException, JSONException;

    JSONObject getCurrentRentals(String username) throws IOException, JSONException;

    JSONObject rentMovie(String username, Integer movieId) throws IOException, JSONException;

    JSONObject addMovie(String username, Movie movie) throws IOException, JSONException;
}
