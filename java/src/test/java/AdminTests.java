import org.junit.Before;
import org.junit.Test;

public class AdminTests {
    private User user;
    @Before
    public void setUp() {
        user = new User(new MovieService(), "Admin", true);
    }

    @Test
    public void Cannot_Add_A_Movie_Without_A_Movie() {
        // add code here
    }
    @Test
    public void Cannot_Add_A_Movie_With_An_Empty_Movie() {
        // add code here
    }
    @Test
    public void Cannot_Add_A_Movie_Without_A_Title() {
        // add code here
    }
    @Test
    public void Cannot_Add_A_Movie_Without_A_Category() {
        // add code here
    }
    @Test
    public void Cannot_Add_A_Movie_Without_Specifying_If_It_Is_New() {
        // add code here
    }
    @Test
    public void Cannot_Add_A_Movie_With_An_Empty_Title() {
        // add code here
    }
    @Test
    public void Cannot_Add_A_Movie_With_An_Empty_Category() {
        // add code here
    }
    @Test
    public void Should_Receive_A_Movie_Id_When_Added_Successfully() {
        // add code here
    }
}
