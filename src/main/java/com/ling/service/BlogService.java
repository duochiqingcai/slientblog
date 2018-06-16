package com.ling.service;

import com.ling.pojo.Blog;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/12 12:55
 * @description:
 * @modify:
 */
public interface BlogService {
    Map<Integer,Blog> getBlog(String email, int m);

    List<Blog> getAllBlog(int m);

    void addBlog(String user_email, String blog_author,String blog_content, String blog_time);
}
