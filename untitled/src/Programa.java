import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Programa {


    public static void main(String[] args) {

        inclua("Gian");
        inclua("Emilio");
        inclua("Kevin");
    }

    public static void inclua(String name) {
        String[] names = new String[30];

        for(int i = 0; i < names.length; i++) {
            if(names[i]==null)
                names[i] = name;
        }

        for(String nomes : names) {
            System.out.println(nomes);
            break;
        }
    }

}
