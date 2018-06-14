package com.ling.controller;

import com.ling.dao.BlogDao;
import com.ling.pojo.Blog;
import com.ling.service.BlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/12 11:58
 * @description:
 * @modify:
 */
@Controller
public class GetBlogController {
    private static final Logger LOGGER=LoggerFactory.getLogger(GetBlogController.class);
    @Resource
    private BlogDao blogDao;
    @Resource
    private BlogService blogService;

    //按用户邮箱，获取用户担任博客信息
    @PostMapping("/getblog")
    @ResponseBody
    public Map<Integer, Blog> getBlog(@RequestParam("user_email")String user_email,@RequestParam("m")Integer m){
        System.out.println(user_email+m);
        return blogService.getBlog(user_email,m);
    }

    //获取全部用户博客信息
    @PostMapping("/getallblog")
    @ResponseBody
    public ArrayList<Blog> getAllBlog(@RequestParam("m")Integer m){
        return (ArrayList<Blog>) blogService.getAllBlog(m);
    }
}
