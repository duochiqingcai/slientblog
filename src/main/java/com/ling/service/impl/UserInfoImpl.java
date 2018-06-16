package com.ling.service.impl;

import com.ling.dao.UserInfoDao;
import com.ling.pojo.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;

/**
 * @author:slientwhale
 * @date: 2018/6/16 15:43
 * @description:
 * @modify:
 */
public class UserInfoImpl implements UserInfoDao {
    private final UserInfoDao userInfoDao;

    @Autowired
    public UserInfoImpl(UserInfoDao userInfoDao) {
        this.userInfoDao = userInfoDao;
    }

    @Cacheable(value = "userinfo",key = "#user_email.toString()")
    @Override
    public UserInfo getUserInfoByEmail(String user_email) {
        return userInfoDao.getUserInfoByEmail(user_email) ;
    }

    @CacheEvict(value = "userinfo",key = "#user_email.toString()" )
    @Override
    public void insertUserInfo(String user_email, String user_qq, String user_github, String user_address) {

    }

    @CacheEvict(value = "userinfo",key = "#user_email.toString()" )
    @Override
    public void updateUserInfo(String user_email, String user_qq, String user_github, String user_address) {

    }
}
