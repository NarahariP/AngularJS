package Test;

import java.util.Arrays;

public class TestPojo {

	private String[] phoneNumber;

	public String[] getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String[] phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Override
	public String toString() {
		return "TestPojo [phoneNumber=" + Arrays.toString(phoneNumber) + "]";
	}
	
}
