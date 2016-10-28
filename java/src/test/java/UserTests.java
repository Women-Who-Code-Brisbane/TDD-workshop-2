import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Ignore;
import org.junit.Test;

import java.io.IOException;

import static org.mockito.Mockito.*;

public class UserTests {

    @Test
    public void Any_User_Can_List_All_Movies() throws IOException {
        // this is a stub
        IMovieService stubService = new StubService();
        User user = new User(stubService , "Dom", false);
        JSONObject actual = user.getAllMovies();
        JSONObject expected = new JSONObject("{result:[{id:1, title:'Alien'}]}");
        // test that we receive the expected output
        Assert.assertEquals(expected.toString(), actual.toString());
    }

    @Test
    public void Any_User_Can_List_Current_Rentals() throws IOException {
        // this is a mock, using the Mockito framework
        IMovieService mockService = mock(IMovieService.class);
        when(mockService.getAllMovies()).thenReturn(new JSONObject("{result:'doesnt matter'}"));
        User user = new User(mockService , "John", false);
        user.getAllMovies();
        // test that the service method has been called exactly once
        verify(mockService).getAllMovies();
    }

    @Test
    @Ignore
    public void Any_User_Can_Rent_A_Movie() {
        // add code here
    }

    @Test
    @Ignore
    public void Regular_User_Cannot_Add_A_Movie() {
        // add code here
    }
}
