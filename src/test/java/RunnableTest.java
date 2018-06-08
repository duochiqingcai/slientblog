/**
 * @author:slientwhale
 * @date: 2018/5/11 12:49
 * @description:
 * @modify:
 */
public class RunnableTest implements Runnable {
    @Override
    public void run() {
        System.out.println("hello");
        Dog.wangwang();
    }
}
