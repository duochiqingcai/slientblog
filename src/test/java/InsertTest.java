import com.ling.dao.BlogDao;
import com.ling.dao.CommentDao;
import com.ling.dao.UserDao;
import com.ling.dto.UserDto;
import com.ling.pojo.Blog;
import com.ling.pojo.User;
import com.ling.service.BlogService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.awt.image.AreaAveragingScaleFilter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private CommentDao commentDao;
    @Test
    public void insertT() {
        try {
            /*userDao.insertUser("san1","72b5009d20df160619688bd4c91ce637","2816924118@qq.com");*/
           commentDao.insertCommentByBlogId(25,"sfas","afdsafdsfdsfdsf","2018-06-19 14:54");
            /*UserDto arrayList=userDao.getUserByEmail("2816924118@qq.com");*/
        }catch (DuplicateKeyException e){
            System.out.println("已存在");
        }

    }
}
