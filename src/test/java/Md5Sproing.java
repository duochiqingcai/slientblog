import org.springframework.util.DigestUtils;

/**
 * @author:slientwhale
 * @date: 2018/6/6 1:29
 * @description:
 * @modify:
 */
public class Md5Sproing {
    public static void main(String[] args) {
        String username="Ling";
        DigestUtils.md5DigestAsHex(username.getBytes());
        System.out.println(DigestUtils.md5DigestAsHex(username.getBytes()));
    }
}
