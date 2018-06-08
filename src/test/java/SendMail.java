import com.ling.pojo.Mail;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

/**
 * @author:slientwhale
 * @date: 2018/5/10 21:44
 * @description:
 * @modify:
 */
public class SendMail {
    private Logger logger=LoggerFactory.getLogger(SendMail.class);

    @Resource
    private static JavaMailSenderImpl javaMailSender;

    public static void main(String[] args) {
/*        javaMailSender.setHost("smtp.qq.com");
        javaMailSender.setPort(587);
        javaMailSender.setProtocol("smtp");
        javaMailSender.setUsername("1193686994@qq.com");
        javaMailSender.setPassword("cbfhndjgroqhfeci");

        Properties properties=System.getProperties();
        //properties.setProperty("mail.host", "smtp.qq.com");
        //properties.setProperty("mail.transport.protocol", "smtp");
        properties.setProperty("mail.smtp.auth", "true");
        properties.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        //properties.setProperty("mail.smtp.port", "465");
*//*        properties.setProperty("mail.smtp.socketFactory.port", "465");*//*

        javaMailSender.setJavaMailProperties(properties);*/


        MimeMessage mimeMessage =javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage,true,"utf-8");
            //发件人地址
            mimeMessageHelper.setFrom("silentwhale@qq.com");
            //收件人地址
            mimeMessageHelper.setTo("2816924118@qq.com");
            //邮件主题
            mimeMessageHelper.setSubject("用户注册");
            //邮件内容
            mimeMessageHelper.setText("恭喜你注册成功！！！");
        } catch (MessagingException e) {
            e.printStackTrace();
            /*logger.error("邮件异常",e.getMessage());*/
        }
        javaMailSender.send(mimeMessage);
        System.out.println("发送成功");
    }
}
