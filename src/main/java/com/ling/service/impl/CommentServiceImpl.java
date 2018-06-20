package com.ling.service.impl;

import com.ling.dao.CommentDao;
import com.ling.dto.CommentDto;
import com.ling.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * @author:slientwhale
 * @date: 2018/6/19 16:40
 * @description:
 * @modify:
 */
@Service
public class CommentServiceImpl implements CommentService {
    private final CommentDao commentDao;

    @Autowired
    public CommentServiceImpl(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    @CacheEvict(value = "BlogCommnet",allEntries = true)
    @Override
    public void insertCommentByBlogId(int blog_id, String comment_name, String comment_content, String comment_time) {

    }

    @Cacheable(value = "'BlogComment",key = "'Blog'+#blog_id.toString()")
    @Override
    public ArrayList<CommentDto> getCommentByBlogId(int blog_id, int m) {
        return commentDao.getCommentByBlogId(blog_id,m);
    }
}
