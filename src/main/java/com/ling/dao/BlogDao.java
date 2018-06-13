package com.ling.dao;

import com.ling.pojo.Blog;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/6/12 11:59
 * @description:
 * @modify:
 */
@Repository
public interface BlogDao {

    /**
     * @param user_email
     * @return Blog
     */
    @MapKey("blog_id")
    Map<Integer,Blog> getBlogByEmail(@Param("user_email")String user_email, @Param("m")int m);

/*    @MapKey("blog_id")
    Map<Integer,Blog> getByemail(@Param("user_email")String user_email);*/
    /**
     * @param blog_content
     * @param blog_picture
     * @param blog_time
     */
    void updateBlog(@Param("blog_content")String blog_content,@Param("blog_picture")String blog_picture,
                    @Param("blog_time")String blog_time);
}
