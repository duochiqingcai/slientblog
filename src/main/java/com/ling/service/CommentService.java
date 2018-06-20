package com.ling.service;

import com.ling.dto.CommentDto;

import java.util.ArrayList;

/**
 * @author:slientwhale
 * @date: 2018/6/20 17:53
 * @description:
 * @modify:
 */
public interface CommentService {

    void insertCommentByBlogId(int blog_id, String comment_name, String comment_content, String comment_time);

    ArrayList<CommentDto> getCommentByBlogId(int blog_id, int m);
}
