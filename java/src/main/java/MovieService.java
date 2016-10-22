import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class MovieService implements IMovieService {

    private String serviceBaseUrl = "http://hickory-snap.hyperdev.space/";

    public JSONObject getAllMovies() throws IOException, JSONException {
        return JsonReader.readJsonFromUrl(serviceBaseUrl + "all");
    }
    public JSONObject getCurrentRentals(String username) throws IOException, JSONException {
        return JsonReader.readJsonFromUrl(serviceBaseUrl + "rentals?username="+ username);
    }
    public JSONObject rentMovie(String username, Integer movieId) throws IOException, JSONException {
        JSONObject payload = new JSONObject();
        payload.put("username", username);
        payload.put("id", movieId);
        return JsonPoster.postJsonToUrl(serviceBaseUrl + "rentMovie", payload.toString());
    }
    public JSONObject addMovie(String username, Movie movie) throws IOException, JSONException {
        JSONObject payload = new JSONObject();
        payload.put("username", username);
        payload.put("movie", movie);
        return JsonPoster.postJsonToUrl(serviceBaseUrl + "addMovie", payload.toString());
    }
}
