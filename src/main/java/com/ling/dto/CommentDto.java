package com.ling.dto;

import java.io.Serializable;

/**
 * @author:slientwhale
 * @date: 2018/6/19 15:48
 * @description:
 * @modify:
 */
public class CommentDto implements Serializable {
    private String comment_name;
    private String comment_content;
    private String comment_time;

    public String getComment_name() {
        return comment_name;
    }

    public void setComment_name(String comment_name) {
        this.comment_name = comment_name;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public String getComment_time() {
        return comment_time;
    }

    public void setComment_time(String comment_time) {
        this.comment_time = comment_time;
    }
}
