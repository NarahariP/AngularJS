package Test;

import java.util.ArrayList;
import java.util.List;

import lambda.pojo.TestPojoL;

public class LambdaTest {

	public static void main(String[] args) {
		
		String s1 =new String("abcd1");
		String s2 =new String("abcd2");
		String s3 =new String("abcd3");
		String s4 =new String("abcd4");
		List<String> list=new ArrayList<String>();
		list.add(s1);list.add(s2);list.add(s3);list.add(s4);
		
		TestPojoL pojo=new TestPojoL();
		
		pojo.setMessagePojo(list);
		
		
		
	}
}
