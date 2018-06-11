package com.ling.utils;

import com.qiniu.util.Auth;

/**
 * @author:slientwhale
 * @date: 2018/6/11 17:12
 * @description:
 * @modify:
 */
public class QiniuUtils {

    public static String getUptoken(){
        String accessKey = "npYadwnTPCi7Ik5T4YcR_j9ozf_C4jCWJTx6hxuf";
        String secretKey= "0AMExG34JRiK1hir5qlwuJDH9hVuU0KcXW15z7zc";
        String bucket="simple-blog";

        Auth auth=Auth.create(accessKey,secretKey);
        String upToken=auth.uploadToken(bucket);
        return upToken;
    }
}
