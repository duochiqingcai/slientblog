import com.ling.utils.QiniuUtils;

/**
 * @author:slientwhale
 * @date: 2018/5/11 13:46
 * @description:
 * @modify:
 */
public class Dog {
    private String color;

    public static void wangwang(){
        String uptonke=QiniuUtils.getUptoken();
        System.out.println(uptonke);
        System.out.println("哇哇哇");
    }
}
