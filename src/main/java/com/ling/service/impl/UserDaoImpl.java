package com.ling.service.impl;

import com.ling.dao.UserDao;
import com.ling.pojo.User;
import com.ling.service.LoginService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author:slientwhale
 * @date: 2018/6/6 19:23
 * @description:
 * @modify:
 */
@Service
public class UserDaoImpl implements LoginService {
    @Resource
    private UserDao userDao;

    @Override
    @Cacheable(value = "getUsre")
    public User getUser(String email) {
        return userDao.getUserByEmail(email);
    }
}
