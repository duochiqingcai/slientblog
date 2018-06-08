package com.ling.service.impl;

import com.ling.dao.UserDao;
import com.ling.service.RegisterService;
import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @author:slientwhale
 * @date: 2018/5/27 1:18
 * @description:
 * @modify:
 */
@Service
public class RegisterServiceImpl implements RegisterService {
    private final static Logger LOGGER=LoggerFactory.getLogger(RegisterServiceImpl.class);
    @Resource
    private UserDao userDao;

    /**
     * @param username
     * @param password
     * @param email
     */
    @Override
    public void register(String username, String password, String email) {
        try {
            userDao.insertUser(username,password,email);
        } catch (DuplicateKeyException e) {
            System.out.println("用户名或者邮箱已存在");
        }
    }
}
