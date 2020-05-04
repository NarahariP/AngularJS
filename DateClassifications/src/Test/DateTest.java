package Test;

import java.math.BigDecimal;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DateTest {

	public static void main(String[] args) {
		java.util.Date uDate=new java.util.Date();	
		Calendar calendar=Calendar.getInstance();
		calendar.add(Calendar.YEAR, 1);
		java.util.Date morrow=calendar.getTime();
		
		System.out.println(uDate+"::"+morrow);
	}
	
	public static void main20(String[] args) {
		TestPojo pojo=new  TestPojo();
		pojo.setPhoneNumber(new String[]{"12365","012"});
		System.out.println(pojo.toString());
	}
	
	public static void main19(String[] args) {
		java.util.Date date=new java.util.Date();
		SimpleDateFormat format=new SimpleDateFormat("MM/dd/yyyy");
		System.out.println(format.format(date));
	}
	
	public static void main18(String[] args) {
		java.util.Date date=new java.util.Date();
		String s=getDate(null);
		if(s!=null){
			System.out.println("a null");
			SimpleDateFormat format=new SimpleDateFormat("MM/dd/yyyy");
			try {
				date=format.parse(s);
			} catch (ParseException e) {}
			System.out.println(date);
		}
		System.out.println(s);
	}
	
	public static void main17(String[] args) throws ParseException {
		java.util.Date udate=new java.util.Date();
		System.out.println("udate "+udate);
		SimpleDateFormat sf=new SimpleDateFormat("MM/dd/yyyy");
		String sdate=sf.format(udate);
		System.out.println("sdate "+sdate);
		java.util.Date date=sf.parse(sdate);
		System.out.println("date "+date);
	}
	
	private static String getDate(java.util.Date utilDAte){
		String date=null;
		if(utilDAte!=null){
			SimpleDateFormat format=new SimpleDateFormat("MM/dd/yyyy");
			date=format.format(utilDAte);
		}
		return date;
	}
	
	public static void main16(String[] args) {
		StringBuffer sb= new StringBuffer();
		String st[]={"586","965","5877"};
		sb=sb.append(st[0]).append("-").append(st[1]).append("-").append(st[2]);
		System.out.println(sb.toString());
	}
	
	public static void main15(String[] args) {
		Double d=null;
		System.out.println(d);
		String i= d!= null ? d.toString() : null;
		Double ii= i!=null ? Double.parseDouble(i) : 0;
		System.out.println(ii);
		System.out.println(ii.intValue());
	}
	
	public static void main14(String[] args) {
		StringBuffer sb= new StringBuffer();
		String st[]={"586","965"};
		if(st.length>=3){
			for (int i = 0; i < 3; i++) {
				String string=st[i];
				sb=sb.append(string.trim());
			}
			System.out.println(sb);
		}else{
			for (String string : st) {
				sb=sb.append(string.trim());
			}
			System.out.println(sb);
		}
	}
	
	public static void main13(String[] args) {
		java.sql.Date sdate= new java.sql.Date(new java.util.Date().getTime());
		System.out.println("Sdate"+sdate);
		SimpleDateFormat df=new SimpleDateFormat("MM/dd/yyyy");
		String ssdate=df.format(sdate);
		System.out.println("ssdate"+ssdate);
		String string="";
		System.out.println("empty string::"+string);
		System.out.println("Integer String::"+Integer.valueOf(null));
		
	}
	
	public static void main12(String[] args) {
		List<String> list1=new ArrayList<String>();
			list1.add("A");
			list1.add("B");
			list1.add("C");
		List<String> list2= new ArrayList<String>();
			list2.add("E");
			list2.add("E");
			list2.add("F");
		Set<String> list3=new HashSet<String>();
			list3.addAll(list1);
			list3.addAll(list2);
	for (String string : list3) {
		System.out.println(string);
		}
	}
	
	public static void main11(String[] args) {
		java.util.Date uDate=new java.util.Date();
		System.out.println("utilDate::"+uDate);
		SimpleDateFormat dateFormat=new SimpleDateFormat("MM/dd/yyyy");
		System.out.println("sqlDate::"+new java.sql.Date(uDate.getTime()));
		System.out.println("format Date:"+dateFormat.format(uDate));
		Long value= (long) 11;
		System.out.println("long value::"+value);
		System.out.println("long with increment::"+(value+1));
	}
	
	public static void main10(String[] args) {
		List<String> list=new ArrayList<String>();
			list.add("aabcd0");
			list.add("aabcd1");
			list.add("aabcd2");
			list.add("aabcd3");
			list.add("aabcd4");
			list.add("aabcd5");
			list.add("aabcd6");
			list.add("aabcd7");
		System.out.println(list.size());
		for(int i=0; i<list.size();i++){
			System.out.println(list.get(i));
		}
	}
	
	public static void main9(String[] args) throws ParseException {
		String date="24/11/2016";
		SimpleDateFormat df=new SimpleDateFormat("MM/dd/yyyy");
		System.out.println(df.parse(date));
	}
	
	public static void main8(String[] args) {
		final Format format=new SimpleDateFormat("MM/dd/yyyy");
		java.sql.Date today=new java.sql.Date(System.currentTimeMillis());
		java.util.Date uDate=new java.util.Date();	
		Calendar calendar=Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_YEAR, 1);
		java.util.Date morrow=calendar.getTime();
		java.sql.Date sDAte=new java.sql.Date(uDate.getTime());
		System.out.println(morrow+":: "+today+":: "+uDate+":: "+sDAte);
		java.sql.Date tDate=new java.sql.Date(morrow.getTime());
		System.out.println(tDate+":"+format.format(tDate));
		System.out.println(morrow.after(today));
		System.out.println(format.format(morrow).equals(format.format(today)));
		System.out.println(format.format(morrow)+":"+format.format(today)+":"+format.format(morrow));
	}
	
	public static void main7(String[] args) throws ParseException {
		java.util.Date date=new java.util.Date();
		java.sql.Date sDAte=new java.sql.Date(date.getTime());
		SimpleDateFormat dateFormat=new SimpleDateFormat("MM/dd/yyyy");
		String ssdate=dateFormat.format(sDAte);
		System.out.println("curent date"+new java.sql.Date(System.currentTimeMillis()));
		System.out.println("String Date::"+ssdate);
		System.out.println("Sql Date::"+sDAte);
	}
	
	public static void main6(String[] args) {
		String[] string={"969","636","4562"};
		TestPojo pojo=new TestPojo();
		pojo.setPhoneNumber(string);
		System.out.println("phone number first part::"+pojo.getPhoneNumber()[0]+"length of it::"+pojo.getPhoneNumber()[0].length());
		System.out.println("phone number second part::"+pojo.getPhoneNumber()[1]+"length of it::"+pojo.getPhoneNumber()[1].length());
		System.out.println("phone number third part::"+pojo.getPhoneNumber()[2]+"length of it::"+pojo.getPhoneNumber()[2].length());
		DateTest dateTest=new DateTest();
		dateTest.getUnFormatedCount(string);
		main1(args);
		main2(args);
		main3(args);
		main4(args);
		main5(args);
	}
	public  void getUnFormatedCount(String[] string){
		StringBuffer buffer=new  StringBuffer();
		for (String string2 : string) {
			buffer=buffer.append(string2);
		}
		System.out.println("buffer string::"+buffer.length());
		System.out.println("buffer string with tostring::"+buffer.toString().length());
		System.out.println("buffer string with tostring and trim::"+buffer.toString().trim().length());
	}
	public static void main5(String[] args) {
		List<String> list=new ArrayList<String>();
		list.add("a");
		System.out.println(list.size());
		System.out.println(getTomorrowDate(new Date()));
	}
	private static Date getTomorrowDate(Date date){
		Calendar cal=Calendar.getInstance();
		cal.setTime(date);
		return cal.getTime();
	}
	public static void main4(String[] args) {
		Calendar  calendar=Calendar.getInstance();
		calendar.add(Calendar.MINUTE, -20);
		SimpleDateFormat df=new SimpleDateFormat("dd/mm/yyyy hh:mm:ss a");
		System.out.println(calendar.getTime());
		System.out.println(df.format(calendar.getTime()));
	}
	
	public static void main1(String[] args) {
		System.out.println(new java.sql.Date(1));
		System.out.println(new java.sql.Date(2));
		System.out.println(new java.sql.Date(3));
		System.out.println(new java.sql.Date(5));
	}
	public static void main2(String[] args) {
		BigDecimal bigDecimal=new BigDecimal(85);
		BigDecimal bigDecimal2=new BigDecimal(45);
		List<BigDecimal> list=new ArrayList<BigDecimal>();
		list.add(bigDecimal);
		list.add(bigDecimal2);
		System.out.println(list.get(1).toString());
	}
	
	public static void main3(String[] args) {
		System.out.println("hello");
		System.out.println(new Date());
		SimpleDateFormat df=new SimpleDateFormat("dd/mm/yyyy hh:mm:ss a");
		System.out.println(new java.sql.Date(new Date().getTime()));
		System.out.println(df.format(new Date()));
	}
}
