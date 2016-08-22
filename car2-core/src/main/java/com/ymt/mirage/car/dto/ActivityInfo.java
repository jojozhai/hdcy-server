/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.math.BigDecimal;
import java.util.List;


/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class ActivityInfo extends ParticipationInfo {

	private Long id;
	/**
	 * 活动介绍图片
	 */
	private List<String> images;
	/**
	 * 联系人电话
	 */
	private String contactPhone;
	/**
	 * 联系人微信
	 */
	private String contactWeixin;
	/**
	 * 报名人数限制
	 */
	private int peopleLimit;
	/**
	 * 活动费用
	 */
	private BigDecimal price;
	/**
	 * 客服
	 */
	private long customerServiceId;

	public long getCustomerServiceId() {
		return customerServiceId;
	}

	public void setCustomerServiceId(long customerServiceId) {
		this.customerServiceId = customerServiceId;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the images
	 */
	public List<String> getImages() {
		return images;
	}

	/**
	 * @param images
	 *            the images to set
	 */
	public void setImages(List<String> images) {
		this.images = images;
	}

	/**
	 * @return the contactPhone
	 */
	public String getContactPhone() {
		return contactPhone;
	}

	/**
	 * @param contactPhone
	 *            the contactPhone to set
	 */
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	/**
	 * @return the contactWeixin
	 */
	public String getContactWeixin() {
		return contactWeixin;
	}

	/**
	 * @param contactWeixin
	 *            the contactWeixin to set
	 */
	public void setContactWeixin(String contactWeixin) {
		this.contactWeixin = contactWeixin;
	}

	/**
	 * @return the peopleLimit
	 */
	public int getPeopleLimit() {
		return peopleLimit;
	}

	/**
	 * @param peopleLimit
	 *            the peopleLimit to set
	 */
	public void setPeopleLimit(int peopleLimit) {
		this.peopleLimit = peopleLimit;
	}

	/**
	 * @return the price
	 */
	public BigDecimal getPrice() {
		return price;
	}

	/**
	 * @param price
	 *            the price to set
	 */
	public void setPrice(BigDecimal price) {
		this.price = price;
	}

    @Override
	public String toString() {
		return "ActivityInfo [id=" + id + ", images=" + images + ", contactPhone=" + contactPhone + ", contactWeixin="
				+ contactWeixin + ", peopleLimit=" + peopleLimit + ", price=" + price + ", customerService="
				+ customerServiceId + "]";
	}

}
