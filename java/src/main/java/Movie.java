import org.json.JSONObject;

public class Movie {
    Integer id;
    Integer categoryId;
    String title;
    Boolean isNew;

    //JSON serializer constructor
    public Movie(Integer id, Integer categoryId, String title, Boolean isNew) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.isNew = isNew;
    }

    Movie(Integer categoryId, String title, Boolean isNew) {
        this.categoryId = categoryId;
        this.title = title;
        this.isNew = isNew;
    }

    @Override
    public String toString() {
        return new JSONObject(this).toString();
    }
}
