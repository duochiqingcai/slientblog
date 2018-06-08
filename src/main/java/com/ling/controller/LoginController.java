package com.ling.controller;

import com.ling.dao.UserDao;
import com.ling.pojo.Mail;
import com.ling.pojo.User;
import com.ling.service.LoginService;
import com.ling.service.MailService;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Controller;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.Serializable;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author:slientwhale
 * @date: 2018/5/9 0:19
 * @description:
 * @modify:
 */
@Controller
public class LoginController implements Serializable {
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    @Resource
    private UserDao userDao;
    @Resource
    private MailService mailService;
    @Resource
    private LoginService loginService;

/*    @PostMapping("/register")
    public String register(@RequestParam("email") String email,@RequestParam("username") String username, @RequestParam("password") String password){
        System.out.println("Email:"+email+"username:"+username+"password:"+password);
        //注册用户信息至数据库
        userDao.insertUser(username,Md5Utils.TransMd5(password,username),email);
        //发送邮件
        String[] receivers={email};
        Mail mail=new Mail(receivers,null,"用户注册","注册成功呀哈哈哈哈哈");
        mailService.sendMail(mail);

        return "login ";
    }*/

    /**
     * @param username
     * @param password
     * @param email
     * @return 注册
     */
    @PostMapping("/register")
    @ResponseBody
    public Map<String, Object> register(@RequestParam("username") String username, @RequestParam("password") String password,
                                        @RequestParam("email") String email, HttpServletRequest request, HttpServletResponse response) throws IOException, JsonGenerationException, JsonMappingException {

        System.out.println("Email:" + email + "username:" + username + "password:" + password);
        //注册用户信息至数据库

        try {
            userDao.insertUser(username, DigestUtils.md5DigestAsHex(password.getBytes()), email);
        } catch (DuplicateKeyException e) {
            System.out.println("已存在");
            Map<String, Object> map = new HashMap<>();
            map.put("ExceptionIfo", "用户名或者邮箱已存在，请重新输入！");
            return map;
        }
        //发送邮件
        String[] receivers = {email};
        Mail mail = new Mail(receivers, null, "用户注册", "注册成功。");
        mailService.sendMail(mail);
        //用户信息保存map
        Map<String, Object> map = new HashMap<>();
        map.put("username", username);
        map.put("email", email);

        //map序列化存入cookie
        ObjectMapper objectMapper = new ObjectMapper();
        Cookie mycookie = new Cookie("ACCOUNT", objectMapper.writeValueAsString(map));
        //设置有效期为7天
        mycookie.setMaxAge(60 * 60);
        //可在同一应用服务器共享方法
        mycookie.setPath("/");
        response.addCookie(mycookie);
        return map;
    }

    /*@GetMapping("/loginCheck")
    @ResponseBody
    public String loginCheck(HttpServletRequest request) throws IOException {
        System.out.println("自动登录检测");
        HttpSession session=request.getSession();
        //获取cookie中的用户信息
        Cookie[] cookies=request.getCookies();
        for (Cookie mycookie :cookies){
            if ((mycookie.getName()).equals("account")){
                session.setAttribute("username",mycookie.getValue());
                HashMap map= (HashMap) JsonTransform.JsonToMap(mycookie.getValue());
                return "{\"result\":\"success\",\"message\":\"成功！\"}";
            }
        }
        return "{\"result\":\"failed\",\"message\":\"shibai！\"}";
    }*/
/*    @GetMapping("/loginCheck")
    @ResponseBody
    public String loginCheck(HttpServletRequest request) throws IOException {
        System.out.println("自动登录检测");
        System.out.println(request.getClass());

        //获取cookie中的用户信息
        *//*Cookie[] cookies=request.getCookies();
        System.out.println(cookies.getClass());
        for (Cookie mycookie :cookies){
            System.out.println(mycookie.getValue());
            System.out.println(mycookie.getMaxAge());
            *//**//*if ((mycookie.getName()).equals("account")){
                System.out.println(mycookie.getValue());
                session.setAttribute("username",mycookie.getValue());
                HashMap map= (HashMap) JsonTransform.JsonToMap(mycookie.getValue());
                return "{\"result\":\"success\",\"message\":\"成功！\"}";
            }*//**//*
        }*//*
        return "{\"result\":\"failed\",\"message\":\"shibai！\"}";
    }*/

    /**
     * @param email
     * @param password
     * @return 登录方法
     */
    @PostMapping("/login")
    @ResponseBody
    public Map<String, Object> login(@RequestParam("email") String email, @RequestParam("password")
            String password, HttpSession session) {
        System.out.println("进入Login");
        logger.info("用户名：" + email + "密码：" + password);
        Map<String, Object> map = new HashMap<>();
        User user=loginService.getUser(email);

        System.out.println(user.getUser_pwd());

        if (DigestUtils.md5DigestAsHex(password.getBytes()).equals(user.getUser_pwd())){
            System.out.println("一样");
            session.setAttribute("account", email);
            session.getMaxInactiveInterval();
            map.put("email",email);
            map.put("username",user.getUser_name());
            return map;
        }else {
            System.out.println("不一样");
            map.put("loginException","账户或者密码错误，请重写输入！");
            return map;
        }
    }
    @GetMapping("/logoutt")
    @ResponseBody
    public Map<String,Object> logoutt(){
        System.out.println("退出登录");
        Map<String,Object> map=new HashMap<>();
        map.put("logout","退出");
        return map;
    }
/*    @PostMapping("/login")
    @ResponseBody
    public Map<String, Object> login(@RequestParam("email") String email, @RequestParam("password")
            String password, HttpSession session) {
        System.out.println("进入Login");
        logger.info("用户名：" + email + "密码：" + password);
        Map<String, Object> map = new HashMap<>();
        User user=userDao.getUserByEmail(email);

        System.out.println(user.getUser_pwd());

        if (DigestUtils.md5DigestAsHex(password.getBytes()).equals(user.getUser_pwd())){
            System.out.println("一样");
            session.setAttribute("account", email);
            session.getMaxInactiveInterval();
            map.put("email",email);
            map.put("username",user.getUser_name());
            return map;
        }else {
            System.out.println("不一样");
            map.put("loginException","账户或者密码错误，请重写输入！");
            return map;
        }
    }*/
}
/*    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestParam("email") String email, @RequestParam("password") String password,HttpServletRequest request) {
        System.out.println("进入Login");
        logger.info("用户名：" + email + "密码：" + password);
        System.out.println(request.getClass());
        HttpSession session=request.getSession();
        System.out.println(session.getClass());

        //根据传输数据，创建Token
        UsernamePasswordToken token = new UsernamePasswordToken(email, password);
        //设置为记住当前用户
        *//*token.setRememberMe(true);*//*
        //创建信息集合Subject
        Subject subject = SecurityUtils.getSubject();

        //进行登录认证
        try {
            subject.login(token);
            System.out.println(subject.isAuthenticated());
        }catch(UnknownAccountException ex){
            logger.debug("账号错误");
            *//*session.setAttribute("AccountError","无此账号");*//*
            return "{\"windowinfo\":\"账号错误！！！\"}";
        }catch(IncorrectCredentialsException ex){
            logger.debug("密码错误");
            return "{\"windowinfo\":\"密码错误！！！\"}";
        }catch(LockedAccountException ex){
            logger.debug("账号已被锁定，请与系统管理员联系");
            return "{\"windowinfo\":\"账号已被锁定，请与系统管理员联系！！！\"}";
        }catch(AuthenticationException ex){
            logger.debug("您没有授权!");
            return "{\"windowinfo\":\"您没有授权！！！\"}";
        }*//*finally {
            subject.logout();
        }*//*
        return "{\"result\":\"failed\",\"message\":\"shibai！\"}";
    }
}*/
