import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/1 0:31
 * @description:
 * @modify:
 */
public class JsonTrans {
    public static void main(String[] args) throws IOException {
        Map<String,Object> map=new HashMap<>();
        map.put("姓名","Ling");
        map.put("密码","1111");

        ObjectMapper mapper=new ObjectMapper();
        String maptos=mapper.writeValueAsString(map);
        System.out.println(maptos);
    }

}
