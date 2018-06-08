package com.ling.shiro.realm;

import com.ling.dao.UserDao;
import com.ling.pojo.User;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;

/**
 * @author:slientwhale
 * @date: 2018/5/9 16:01
 * @description:MD5+salt加密认证授权类
 * @modify:
 */
public class EncryptionRealm extends AuthorizingRealm {

    private static final Logger logger=LoggerFactory.getLogger(EncryptionRealm.class);
    @Resource
    private UserDao userDao;

    @Override
    public String getName() {
        return "EncryptionRealm";
    }

    /**
     * @param principalCollection
     * @return
     * 权限管理方法
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }

    /**
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     * MD5加密登录
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        //从Token获取登录信息email
        String email=(String)authenticationToken.getPrincipal();
        //从数据库查找是否存在用户信息
        User user=userDao.getUserByEmail(email);
        //MD5加密认证
        if(user == null){
            return null;
        }
        System.out.println("进入加密Realm");
        return new SimpleAuthenticationInfo(user.getUser_email(),user.getUser_pwd(),ByteSource.Util.bytes(user.getUser_email()),getName());

    }
}
