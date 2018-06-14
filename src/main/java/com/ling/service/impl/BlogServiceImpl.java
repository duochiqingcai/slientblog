package com.ling.service.impl;

import com.ling.dao.BlogDao;
import com.ling.pojo.Blog;
import com.ling.service.BlogService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
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

    @Cacheable(value = "BlogInfo",key = "#email+'Page'+#m.toString()")
    @Override
    public Map<Integer,Blog> getBlog(String email, int m) {
        return blogDao.getBlogByEmail(email,m);
    }

    @Cacheable(value = "AllBlog",key = "'Page'+#m.toString()")
    @Override
    public List<Blog> getAllBlog(int m) {
        return blogDao.getAllBlog(m);
    }

    @Override
    public void AddBlog(String blog_content, String blog_picture, String blog_time) {
        blogDao.updateBlog(blog_content,blog_picture,blog_time);
    }
}
