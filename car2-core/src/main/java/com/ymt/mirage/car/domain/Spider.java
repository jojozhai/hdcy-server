package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class Spider extends DomainImpl {
	private String name;
	private String age;
	private String sex;
	private String cardid;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getCardid() {
		return cardid;
	}

	public void setCardid(String cardid) {
		this.cardid = cardid;
	}

}
