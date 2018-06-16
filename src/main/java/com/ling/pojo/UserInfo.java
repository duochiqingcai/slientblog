package com.ling.pojo;

import java.io.Serializable;

/**
 * @author:slientwhale
 * @date: 2018/6/16 14:51
 * @description:
 * @modify:
 */
public class UserInfo implements Serializable {
    private Integer user_id;
    private String user_email;
    private String user_qq;
    private String user_github;
    private String user_address;
    private String user_register_time;
    private String user_description;

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_qq() {
        return user_qq;
    }

    public void setUser_qq(String user_qq) {
        this.user_qq = user_qq;
    }

    public String getUser_github() {
        return user_github;
    }

    public void setUser_github(String user_github) {
        this.user_github = user_github;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_register_time() {
        return user_register_time;
    }

    public void setUser_register_time(String user_register_time) {
        this.user_register_time = user_register_time;
    }

    public String getUser_description() {
        return user_description;
    }

    public void setUser_description(String user_description) {
        this.user_description = user_description;
    }
}
