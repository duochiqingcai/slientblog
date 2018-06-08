package com.ling.utils;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/1 1:42
 * @description:
 * @modify:
 */
public class JsonTransform {

    private static ObjectMapper mapper=new ObjectMapper();

    //Map转json
    public static String MapToJson(Map<String,Object> map) throws IOException, JsonGenerationException, JsonMappingException {
        return mapper.writeValueAsString(map);
    }

    //Json转java对象
    public static Object JsonToObject(String json) throws IOException, JsonGenerationException, JsonMappingException{
        return mapper.readValue(json,Object.class);
    }

    //Json转Map
    public static Map JsonToMap(String json) throws IOException, JsonGenerationException, JsonMappingException{
        return mapper.readValue(json,Map.class);
    }
}
