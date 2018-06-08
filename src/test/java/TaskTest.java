import org.junit.runner.RunWith;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.lang.annotation.Repeatable;

/**
 * @author:slientwhale
 * @date: 2018/5/11 12:48
 * @description:
 * @modify:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
@EnableAsync
public class TaskTest {
    @Resource
    private ThreadPoolTaskExecutor taskExecutor;

    @org.junit.Test
    public void  test(){
        taskExecutor.execute(new RunnableTest());
        System.out.println(taskExecutor.getThreadPoolExecutor());
    }
}
