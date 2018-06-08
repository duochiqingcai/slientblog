package com.ling.service.impl;

import com.ling.pojo.Mail;
import com.ling.service.MailService;
import com.ling.utils.MailUtils;
import org.omg.IOP.Encoding;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * @author:slientwhale
 * @date: 2018/5/10 18:32
 * @description:利用线程池，多线程发送邮件服务
 * @modify:
 */
@Service
public class MailServiceImpl implements MailService {

    private static final Logger LOGGER = LoggerFactory.getLogger(MailUtils.class);
    @Resource
    private ThreadPoolTaskExecutor taskExecutor;
    @Resource
    private JavaMailSenderImpl javaMailSender;

    /**
     * @param mail 用户注册，发送邮件
     */
    @Override
    public void sendMail(Mail mail) {
        //
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "utf-8");
            //发件人地址
            mimeMessageHelper.setFrom("silentwhale@qq.com");
            //收件人地址
            mimeMessageHelper.setTo(mail.getReceiver());
            //抄送地址
            if (mail.getCarbonCopy()!=null){
                mimeMessageHelper.setCc(mail.getCarbonCopy());
            }
            //邮件主题
            mimeMessageHelper.setSubject(mail.getSubject());
            //邮件内容
            mimeMessageHelper.setText(mail.getText());
/*            javaMailSender.send(mimeMessage);*/
            //创建线程发送邮件
            sendMailTask(mimeMessage);
        } catch (MessagingException e) {
            LOGGER.error("创建邮件异常", e.getMessage());
        }
    }
    //使用线程池获取线程发送邮件
    private void sendMailTask(MimeMessage mimeMessage) {
        try {
            taskExecutor.execute(new Runnable() {
                @Override
                public void run() {
                    javaMailSender.send(mimeMessage);
                    System.out.println("发送邮件成功完成！！！");
                }
            });
        } catch (Exception e) {
            LOGGER.error("邮件发送异常");
        }
    }
}
