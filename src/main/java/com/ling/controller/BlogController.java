package com.ling.controller;

import com.ling.dao.BlogDao;
import com.ling.pojo.Blog;
import com.ling.service.BlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/12 11:58
 * @description:
 * @modify:
 */
@Controller
public class BlogController {
    private static final Logger LOGGER=LoggerFactory.getLogger(BlogController.class);
    @Resource
    private BlogDao blogDao;
    @Resource
    private BlogService blogService;

    //按用户邮箱，获取用户单人博客信息
    @PostMapping("/getblog")
    @ResponseBody
    private Map<Integer, Blog> getBlog(@RequestParam("user_email")String user_email,@RequestParam("m")Integer m){
        System.out.println(user_email+m);
        return blogService.getBlog(user_email,m);
    }

    //获取全部用户博客信息
    @PostMapping("/getallblog")
    @ResponseBody
    private ArrayList<Blog> getAllBlog(@RequestParam("m")Integer m){
        return (ArrayList<Blog>) blogService.getAllBlog(m);
    }

    //新增用户博客
    @PostMapping("/addblog")
    @ResponseBody
    private void addBlog(@RequestParam("user_email")String user_email,@RequestParam("blog_author")String blog_author,@RequestParam("blog_content")String blog_content,
                         @RequestParam("blog_time")String blog_time){
        blogService.addBlog(user_email,blog_author,blog_content, blog_time);
    }
}
