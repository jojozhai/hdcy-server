package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class KeyWord extends DomainImpl {
	/**
	 * 关键字
	 */
	private String keyWord;

	public String getKeyWord() {
		return keyWord;
	}

	public void setKeyWord(String keyWord) {
		this.keyWord = keyWord;
	}

	@Override
	public String toString() {
		return "KeyWord [keyWord=" + keyWord + "]";
	}
	
	
}
