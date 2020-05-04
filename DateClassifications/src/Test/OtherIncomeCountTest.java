package Test;

public class OtherIncomeCountTest {

	
	
	public static void main(String[] args) {
		String otherOne="Y";
		String otherTwo="Y ";
		String otherThree="y";
		String otherFour="Y";
		
		int otherIncome=0;
		
		if(StringUtils.isNotBlank(otherOne)){
			otherIncome++;
			System.out.println("From One: "+otherIncome);
		}
		if(StringUtils.isNotBlank(otherTwo)){
			otherIncome++;
		}
		if(StringUtils.isNotBlank(otherThree)){
			otherIncome++;
		}
		if(StringUtils.isNotBlank(otherFour)){
			otherIncome++;
		}

		System.out.println("Oter Benifit Count is: "+otherIncome);
	}

}
