import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class StubService implements IMovieService {
    public JSONObject getAllMovies() throws IOException, JSONException {
        return new JSONObject("{result:[{id:1, title:'Alien'}]}");
    }

    public JSONObject getCurrentRentals(String username) throws IOException, JSONException {
        return null;
    }

    public JSONObject rentMovie(String username, Integer movieId) throws IOException, JSONException {
        return null;
    }

    public JSONObject addMovie(String username, Movie movie) throws IOException, JSONException {
        return null;
    }
}
