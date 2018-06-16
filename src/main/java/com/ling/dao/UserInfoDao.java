package com.ling.dao;

import com.ling.pojo.UserInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @author:slientwhale
 * @date: 2018/6/16 14:54
 * @description:
 * @modify:
 */
@Repository
public interface UserInfoDao {
    /**
     * @param user_email
     * @return UserInfo
     */
    //获取用户信息
    UserInfo getUserInfoByEmail(@Param("user_email")String user_email);

    //添加用户信息
    void insertUserInfo(@Param("user_email")String user_email,@Param("user_qq")String user_qq,
                               @Param("user_github")String user_github,@Param("user_address")String user_address);

    //更新用户信息
    void updateUserInfo(@Param("user_email")String user_email,@Param("user_qq")String user_qq,
                               @Param("user_github")String user_github,@Param("user_address")String user_address);
}
