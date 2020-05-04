package Java8;


public class StreamApiTest {

	public static void main(String[] args) {
		
		Object obj = null,obj2 = new Object();
		
		System.out.println(obj+":::"+obj2);
		
		methodCall(obj,obj2);
		
	}

	private static void methodCall(Object obj, Object obj2) {
		
		method((POJO) obj, obj2);
	}

	private static void method(POJO obj, Object obj2) {
		
		System.out.println(obj+":::"+obj2);
		
	}
}
