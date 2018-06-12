package com.ling.service.impl;

import com.ling.dao.BlogDao;
import com.ling.pojo.Blog;
import com.ling.service.BlogService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/12 12:59
 * @description:
 * @modify:
 */
@Service
public class BlogServiceImpl implements BlogService {
    @Resource
    private BlogDao blogDao;


    @Override
    public Map<Integer,Blog> getBlog(String email, int m) {
        return blogDao.getBlogByEmail(email,m);
    }

    @Override
    public void AddBlog(String blog_content, String blog_picture, String blog_time) {
        blogDao.updateBlog(blog_content,blog_picture,blog_time);
    }
}
