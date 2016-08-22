package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class CustomerService extends DomainImpl {
	/**
	 * 客服名称
	 */
	private String customerServiceName;
	/**
	 * 客服联系电话
	 */
	private String phonenumber;

	public String getCustomerServiceName() {
		return customerServiceName;
	}

	public void setCustomerServiceName(String customerServiceName) {
		this.customerServiceName = customerServiceName;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

}
