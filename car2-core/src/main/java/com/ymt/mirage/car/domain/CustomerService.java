package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class CustomerService extends DomainImpl {
	/**
	 * 客服名称
	 */
	private String name;
	/**
	 * 客服联系电话
	 */
	private String phone;
	/**
	 * 客服头像
	 */
	private String image;

	public String getName() {
		return name;
	}

	public void setName(String customerServiceName) {
		this.name = customerServiceName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phonenumber) {
		this.phone = phonenumber;
	}

    /**
     * @return the image
     */
    public String getImage() {
        return image;
    }

    /**
     * @param image the image to set
     */
    public void setImage(String image) {
        this.image = image;
    }

}
