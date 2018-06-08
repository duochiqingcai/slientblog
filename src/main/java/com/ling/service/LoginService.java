package com.ling.service;

import com.ling.pojo.User;

/**
 * @author:slientwhale
 * @date: 2018/6/6 19:22
 * @description:
 * @modify:
 */

public interface LoginService {
    public User getUser(String email);
}
