package com.ling.pojo;

/**
 * @author:slientwhale
 * @date: 2018/6/12 11:59
 * @description:blog表信息
 * @modify:
 */
public class Blog {
    private Integer blog_id;
    private String user_email;
    private String blog_content;
    private String blog_picture;
    private String blog_time;
    private String blog_description;

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

    public String getBlog_content() {
        return blog_content;
    }

    public void setBlog_content(String blog_content) {
        this.blog_content = blog_content;
    }

    public String getBlog_picture() {
        return blog_picture;
    }

    public void setBlog_picture(String blog_picture) {
        this.blog_picture = blog_picture;
    }

    public String getBlog_time() {
        return blog_time;
    }

    public void setBlog_time(String blog_time) {
        this.blog_time = blog_time;
    }

    public String getBlog_description() {
        return blog_description;
    }

    public void setBlog_description(String blog_description) {
        this.blog_description = blog_description;
    }

}
