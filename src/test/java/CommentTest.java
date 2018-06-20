import com.ling.dao.CommentDao;
import com.ling.dto.CommentDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;

/**
 * @author:slientwhale
 * @date: 2018/6/19 16:02
 * @description:
 * @modify:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class CommentTest {
    private static final Logger LOGGER = LoggerFactory.getLogger(MailTest.class);

    @Autowired
    private CommentDao commentDao;

    @Test
    public void comtest(){
        ArrayList<CommentDto> arrayList=commentDao.getCommentByBlogId(25,0);
        System.out.println(arrayList.get(0).toString());
    }
}
