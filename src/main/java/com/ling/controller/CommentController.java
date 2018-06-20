package com.ling.controller;

import com.ling.dao.CommentDao;
import com.ling.dto.CommentDto;
import com.ling.service.CommentService;
import com.ling.service.impl.CommentServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @author:slientwhale
 * @date: 2018/6/20 15:32
 * @description:
 * @modify:
 */
@Controller
public class CommentController {
    private final static Logger LOGGER=LoggerFactory.getLogger(CommentController.class);
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    /*添加评论信息到到数据库*/
    @GetMapping("/insertComment")
    private void insertComment(@RequestParam("blog_id")int blog_id,@RequestParam("comment_name")String comment_name,
                               @RequestParam("comment_content")String comment_content,@RequestParam("comment_time")String comment_time){
        commentService.insertCommentByBlogId(blog_id, comment_name, comment_content, comment_time);
    }

    /*获取当前博客评论*/
    @PostMapping("/getComment")
    @ResponseBody
    private ArrayList<CommentDto> getComment(@RequestParam("blog_id")int blog_id,@RequestParam("m")int m){
        return commentService.getCommentByBlogId(blog_id, m);
    }
}
