/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class ActivityInfo extends ParticipationInfo {

	private Long id;
	/**
     * 省份
     */
    private String province;
    /**
     * 城市
     */
    private String city;
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
	/**
	 * 客服名称
	 */
	private String waiterName;
	/**
	 * 客服电话
	 */
	private String waiterPhone;
	/**
	 * 客服头像
	 */
	private String waiterImage;
	/**
     * 报名开始时间
     */
    private Date signStartTime;
    /**
     * 报名结束时间
     */
    private Date signEndTime;
    /**
     * 报名人数
     */
    private Long signCount;
    /**
     * 报名人数加权
     */
    private Long signCountPlus;


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

    /**
     * @return the signStartTime
     */
    public Date getSignStartTime() {
        return signStartTime;
    }

    /**
     * @param signStartTime the signStartTime to set
     */
    public void setSignStartTime(Date signStartTime) {
        this.signStartTime = signStartTime;
    }

    /**
     * @return the signEndTime
     */
    public Date getSignEndTime() {
        return signEndTime;
    }

    /**
     * @param signEndTime the signEndTime to set
     */
    public void setSignEndTime(Date signEndTime) {
        this.signEndTime = signEndTime;
    }

    /**
     * @return the waiterName
     */
    public String getWaiterName() {
        return waiterName;
    }

    /**
     * @param waiterName the waiterName to set
     */
    public void setWaiterName(String waiterName) {
        this.waiterName = waiterName;
    }

    /**
     * @return the waiterPhone
     */
    public String getWaiterPhone() {
        return waiterPhone;
    }

    /**
     * @param waiterPhone the waiterPhone to set
     */
    public void setWaiterPhone(String waiterPhone) {
        this.waiterPhone = waiterPhone;
    }

    /**
     * @return the waiterImage
     */
    public String getWaiterImage() {
        return waiterImage;
    }

    /**
     * @param waiterImage the waiterImage to set
     */
    public void setWaiterImage(String waiterImage) {
        this.waiterImage = waiterImage;
    }

    /**
     * @return the signCount
     */
    public Long getSignCount() {
        return signCount;
    }

    /**
     * @param signCount the signCount to set
     */
    public void setSignCount(Long signCount) {
        this.signCount = signCount;
    }

    /**
     * @return the signCountPlus
     */
    public Long getSignCountPlus() {
        return signCountPlus;
    }

    /**
     * @param signCountPlus the signCountPlus to set
     */
    public void setSignCountPlus(Long signCountPlus) {
        this.signCountPlus = signCountPlus;
    }

    /**
     * @return the province
     */
    public String getProvince() {
        return province;
    }

    /**
     * @param province the province to set
     */
    public void setProvince(String province) {
        this.province = province;
    }

    /**
     * @return the city
     */
    public String getCity() {
        return city;
    }

    /**
     * @param city the city to set
     */
    public void setCity(String city) {
        this.city = city;
    }

    @Override
	public String toString() {
		return "ActivityInfo [id=" + id + ", images=" + images + ", contactPhone=" + contactPhone + ", contactWeixin="
				+ contactWeixin + ", peopleLimit=" + peopleLimit + ", price=" + price + ", customerService="
				+ customerServiceId + "]";
	}

}
