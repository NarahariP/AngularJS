package Test;

public class PassByTest {
	
	public static void main(String[] args) {
	
		StringBuffer sb = new StringBuffer();
		
		sb.append("Hi, ");
		sb.append("Hello!");
		doWork(sb);
		System.out.println(sb.toString());
	}

	private static void doWork(StringBuffer sb) {
		
		sb.append(" How are you.");
		
	}

	
}
