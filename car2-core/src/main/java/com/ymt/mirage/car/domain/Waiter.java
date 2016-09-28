package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class Waiter extends DomainImpl {
	/**
	 * 客服名称
	 */
	private String name;
	/**
	 * 客服微信
	 */
	private String weixin;
	/**
	 * 客服联系电话
	 */
	private String phone;
	/**
	 * 客服头像
	 */
	private String image;
	/**
	 * 客服二维码
	 */
	private String qrcode;

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

    /**
     * @return the weixin
     */
    public String getWeixin() {
        return weixin;
    }

    /**
     * @param weixin the weixin to set
     */
    public void setWeixin(String weixin) {
        this.weixin = weixin;
    }

    /**
     * @return the qrcode
     */
    public String getQrcode() {
        return qrcode;
    }

    /**
     * @param qrcode the qrcode to set
     */
    public void setQrcode(String qrcode) {
        this.qrcode = qrcode;
    }

}
