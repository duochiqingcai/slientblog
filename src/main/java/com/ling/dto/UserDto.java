package com.ling.dto;

import com.ling.pojo.User;
import com.ling.pojo.UserInfo;

import java.io.Serializable;

/**
 * @author:slientwhale
 * @date: 2018/6/16 23:36
 * @description:
 * @modify:
 */
public class UserDto implements Serializable {
    private String user_name;
    private String user_pwd;
    private String user_email;
    private String user_qq;
    private String user_github;
    private String user_address;


    public String getUser_pwd() {
        return user_pwd;
    }

    public void setUser_pwd(String user_pwd) {
        this.user_pwd = user_pwd;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
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
}
