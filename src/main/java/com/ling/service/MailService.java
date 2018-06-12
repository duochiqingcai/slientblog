package com.ling.service;

import com.ling.pojo.Mail;

/**
 * @author:slientwhale
 * @date: 2018/5/10 18:29
 * @description:邮件发送
 * @modify:
 */
public interface MailService {

    /**
     * @param mail
     * 邮件发送功能
     */
    void sendMail(Mail mail);
}
