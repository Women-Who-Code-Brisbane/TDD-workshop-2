import org.json.JSONObject;

import java.io.IOException;

public class User {
    private final IMovieService service;
    private final String username;
    private final Boolean isAdmin;


    public User(IMovieService service, String username, boolean isAdmin) {
        this.service = service;
        this.username = username;
        this.isAdmin = isAdmin;
    }

    public JSONObject getAllMovies() throws IOException {
        return this.service.getAllMovies();
    }
}
