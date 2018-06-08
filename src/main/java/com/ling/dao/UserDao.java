package com.ling.dao;

import com.ling.pojo.User;
import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;
import org.apache.ibatis.annotations.Param;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Repository;

/**
 * @author:slientwhale
 * @date:
 * @description:
 * @modify:
 */
@Repository
public interface UserDao {
    /**
     * @param email
     * @return
     * 根据用户名查询用户信息
     */
    User getUserByEmail(@Param("email") String email);

    /**insert
     * @param username
     * @param password
     * @param mail
     * 添加注册用户信息
     */
    void insertUser(@Param("username")String username,@Param("password")String password,@Param("email")String mail) throws DuplicateKeyException;
}
