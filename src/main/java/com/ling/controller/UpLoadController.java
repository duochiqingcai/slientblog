package com.ling.controller;

import com.ling.utils.QiniuUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/12 1:05
 * @description:
 * @modify:
 */
@Controller
public class UpLoadController {
    private static Logger logger=LoggerFactory.getLogger(UpLoadController.class);

    @GetMapping("/uptoken")
    @ResponseBody
    public Map getUptoken(){
        Map<String,String> map=new HashMap<>();
        map.put("uptoken",QiniuUtils.getUptoken());
        return map ;
    }
}
