package com.ling.dto;

import java.io.Serializable;

/**
 * @author:slientwhale
 * @date: 2018/6/19 14:27
 * @description:
 * @modify:
 */
public class BlogDto implements Serializable {
    private Integer blog_id;
    private String user_email;
    private String blog_author;
    private String blog_content;
    private String blog_time;

    public Integer getBlog_id() {
        return blog_id;
    }

    public void setBlog_id(Integer blog_id) {
        this.blog_id = blog_id;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getBlog_author() {
        return blog_author;
    }

    public void setBlog_author(String blog_author) {
        this.blog_author = blog_author;
    }

    public String getBlog_content() {
        return blog_content;
    }

    public void setBlog_content(String blog_content) {
        this.blog_content = blog_content;
    }

    public String getBlog_time() {
        return blog_time;
    }

    public void setBlog_time(String blog_time) {
        this.blog_time = blog_time;
    }
}
