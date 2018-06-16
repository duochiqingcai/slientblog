package com.ling.service.impl;

import com.ling.dao.UserDao;
import com.ling.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

/**
 * @author:slientwhale
 * @date: 2018/6/6 19:23
 * @description:
 * @modify:
 */
@Service
public class UserDaoImpl implements UserDao {
    private final UserDao userDao;

    @Autowired
    public UserDaoImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public UserDto getUserByEmail(String email) {
        return userDao.getUserByEmail(email);
    }

    @Override
    public void insertUser(String username, String password, String mail) throws DuplicateKeyException {

    }
}
