import com.ling.dao.UserDao;
import com.ling.pojo.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * @author:slientwhale
 * @date: 2018/5/28 10:50
 * @description:
 * @modify:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class InsertTest {
    private static final Logger LOGGER = LoggerFactory.getLogger(MailTest.class);

    @Resource
    private UserDao userDao;

    @Test
    public void insertT() {
        try {
            /*userDao.insertUser("san1","72b5009d20df160619688bd4c91ce637","2816924118@qq.com");*/
            User user=userDao.getUserByEmail("2816924118@qq.com");
            System.out.println(user);
        }catch (DuplicateKeyException e){
            System.out.println("已存在");
        }

    }
}
