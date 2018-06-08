package com.ling.shiro.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

/**
 * @author:slientwhale
 * @date: 2018/5/17 18:40
 * @description:权限管理Realm
 * @modify:
 */
public class PermissionRealm extends AuthorizingRealm {

    @Override
    public String getName() {
        return "PermissionRealm";
    }

    /**
     * @param principalCollection
     * @return
     * 授权管理
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {

        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        return null;
    }
}
