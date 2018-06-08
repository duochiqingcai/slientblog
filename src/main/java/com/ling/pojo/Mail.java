package com.ling.pojo;

import org.springframework.util.Assert;

import javax.mail.internet.AddressException;
import java.io.Serializable;
import java.util.ArrayList;

/**
 * @author:slientwhale
 * @date: 2018/5/10 17:27
 * @description: 简单邮件对象，属性值较少
 * @modify:
 */
public class Mail implements Serializable {
    //收件人
    private String[] receiver;
    //抄送人

    public Mail(String[] receiver, String[] carbonCopy, String subject, String text) {
        this.receiver = receiver;
        this.carbonCopy = carbonCopy;
        this.subject = subject;
        this.text = text;
    }

    private String[] carbonCopy;
    //主题
    private String subject;
    //内容
    private String text;

    public String[] getReceiver() {
        return receiver;
    }

    public void setReceiver(String[] receiver) {
        this.receiver = receiver;
    }

    public String[] getCarbonCopy() {
        return carbonCopy;
    }

    public void setCarbonCopy(String[] carbonCopy) {
        this.carbonCopy = carbonCopy;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}