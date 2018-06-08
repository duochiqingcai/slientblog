package com.ling.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpRequest;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @author:slientwhale
 * @date: 2018/6/5 22:49
 * @description:
 * @modify:
 */
public class FilterTest implements Filter {
    private static final Logger LOGGER=LoggerFactory.getLogger(FilterTest.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("Filter初始化");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        System.out.println(servletRequest.getParameter("email"));
        System.out.println(servletRequest.getParameter("password"));
        System.out.println("service前执行代码");
        filterChain.doFilter(servletRequest,servletResponse);//执行目标资源
        HttpSession session=((HttpServletRequest)servletRequest).getSession(true);
        System.out.println("调用sercice后执行代码");
    }

    @Override
    public void destroy() {
        System.out.println("filter销毁");
    }
}
