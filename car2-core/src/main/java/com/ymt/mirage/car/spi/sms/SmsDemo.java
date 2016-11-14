package com.ymt.mirage.car.spi.sms;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SmsDemo {

	/**
	 * ���Žӿ�һ����д�������ݡ��ýӿ��ύ�Ķ��ž����˹���ˣ��·�������ϵ���߿ͷ����ʺϣ��ڼ���ף������ԱӪ��Ⱥ���ȡ�
	 */
	public static void sms_api1() {

		Map<String, String> para = new HashMap<String, String>();

		/**
		 * Ŀ���ֻ���룬����ԡ�,���ָ���һ���Ե������100�����룬ʾ��139********,138********
		 */
		para.put("mob", "<enter your mobiles>");

		/**
		 * ΢���˺ŵĽӿ�UID
		 */
		para.put("uid", "<enter your UID>");

		/**
		 * ΢���˺ŵĽӿ�����
		 */
		para.put("pas", "<enter your UID Pass>");

		/**
		 * �ӿڷ������ͣ�json��xml��txt��Ĭ��ֵΪtxt
		 */
		para.put("type", "json");

		/**
		 * �������ݡ��������úö���ǩ��ǩ��淶�� <br>
		 * 1����������һ��Ҫ��ǩ��ǩ����ڶ������ݵ���ǰ�棻<br>
		 * 2��ǩ���ʽ����***����ǩ������Ϊ����������ϣ������������<br>
		 * 3���������ݲ�����˫ǩ������������ֻ��һ����������
		 * 
		 */
		para.put("con", "��΢�ס������֤���ǣ�610912��3��������Ч��������˲������ɺ��Ա���Ϣ��");

		try {
			System.out.println(HttpClientHelper.convertStreamToString(
					HttpClientHelper.get("http://api.weimi.cc/2/sms/send.html",
							para), "UTF-8"));

			System.out.println(HttpClientHelper.convertStreamToString(
					HttpClientHelper.post(
							"http://api.weimi.cc/2/sms/send.html", para),
					"UTF-8"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static boolean isMobileNO(String mobiles){  
	    Pattern p = Pattern.compile("^((13[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\\d{8}$");  
	    Matcher m = p.matcher(mobiles);  
	    return m.matches(); 
	}  
	
	/**
	 * ���Žӿڶ���������ģ����Žӿڣ��������ö�̬����������ʺϣ���֤�롢�������ŵȡ�
	 */
	public static void sms_api2(String mobile, String code) {

		Map<String, String> para = new HashMap<String, String>();

		para.put("mob", mobile);

		para.put("uid", "zvKoWEo9KDYZ");

		para.put("pas", "bk7252e7");

		para.put("type", "json");

		para.put("cid", "RyIRWSRlF5Wy");

		para.put("p1", code);

		try {
			System.out.println(HttpClientHelper.convertStreamToString(
					HttpClientHelper.get("http://api.weimi.cc/2/sms/send.html",
							para), "UTF-8"));

//			System.out.println(HttpClientHelper.convertStreamToString(
//					HttpClientHelper.post(
//							"http://api.weimi.cc/2/sms/send.html", para),
//					"UTF-8"));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] a) {

		// ���Զ��Žӿ�һ
//		sms_api1();
		
		// ���Զ��Žӿڶ�
//		sms_api2("13011056600", "123456");
		
		//ע�⣺���ϲ�����ʱ��������<>�����
	    
	    System.out.println(SmsDemo.isMobileNO("13011056600 (select"));
	    System.out.println(SmsDemo.isMobileNO("13011056600"));
	}

}
