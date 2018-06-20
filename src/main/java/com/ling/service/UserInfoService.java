package com.ling.service;

import com.ling.dao.UserInfoDao;
import com.ling.pojo.UserInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;

/**
 * @author:slientwhale
 * @date: 2018/6/16 15:38
 * @description:
 * @modify:
 */
public interface UserInfoService {

    //获取用户信息
    UserInfo getUserInfoByEmail(@Param("user_email")String user_email);
}
