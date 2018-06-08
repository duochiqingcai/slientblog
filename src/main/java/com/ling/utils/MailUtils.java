package com.ling.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import javax.annotation.Resource;

/**
 * @author:slientwhale
 * @date: 2018/5/10 13:05
 * @description:java邮件
 * @modify:
 */
public class MailUtils {
    private static final Logger LOGGER=LoggerFactory.getLogger(MailUtils.class);

    @Resource
    private JavaMailSender javaMailSender;
}
