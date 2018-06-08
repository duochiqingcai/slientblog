import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

/**
 * @author:slientwhale
 * @date: 2018/5/11 13:33
 * @description:
 * @modify:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
@EnableAsync
public class MailTest2 {

    private static final Logger LOGGER = LoggerFactory.getLogger(MailTest.class);

    @Resource
    private JavaMailSenderImpl javaMailSender;
    @Resource
    private ThreadPoolTaskExecutor taskExecutor;

    @org.junit.Test
    public void test() {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "utf-8");
            //发件人地址
            mimeMessageHelper.setFrom("silentwhale@qq.com");
            //收件人地址
            mimeMessageHelper.setTo("2816924118@qq.com");
            //邮件主题
            mimeMessageHelper.setSubject("用户注册");
            //邮件内容
            mimeMessageHelper.setText("恭喜你注册成功！！！");
            //多线程发送邮件
            System.out.println("我崩溃了");
            javaMailSender.send(mimeMessage);
       /*     sendMailTask(mimeMessage);*/
        } catch (MessagingException e) {
            LOGGER.error("邮件异常", e.getMessage());
        }
    }

    //使用线程池获取线程发送邮件
/*    private void sendMailTask(MimeMessage mimeMessage) {
        try {
            taskExecutor.execute(new Runnable() {
                @Override
                public void run() {
                    System.out.println("我崩溃了");

                    javaMailSender.send(mimeMessage);
                    System.out.println(taskExecutor.getThreadPoolExecutor());
                }
            });

        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/
}

