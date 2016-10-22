import java.io.IOException;

public class main {
    public static void main(String args[]) {
        IMovieService service = new MovieService();
        try {
            System.out.println(service.getAllMovies());
            System.out.println(service.getCurrentRentals("dom"));
            System.out.println(service.rentMovie("dom", 1));
            System.out.println(service.addMovie("admin", new Movie(1, "new movie", true)));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
