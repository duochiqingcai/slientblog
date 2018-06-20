package com.ling.dao;

import com.ling.dto.CommentDto;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * @author:slientwhale
 * @date: 2018/6/19 15:49
 * @description:
 * @modify:
 */
@Repository
public interface CommentDao {

    //通过博客id写入评论到数据库
    void insertCommentByBlogId(@Param("blog_id")int blog_id,@Param("comment_name")String comment_name,
                               @Param("comment_content")String comment_content,@Param("comment_time")String comment_time);

    //通过博客id获取对应评论结果集
    ArrayList<CommentDto> getCommentByBlogId(@Param("blog_id")int blog_id,@Param("m")int m);

}
