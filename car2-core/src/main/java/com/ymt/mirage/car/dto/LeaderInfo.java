/**
 * 
 */
package com.ymt.mirage.car.dto;

import com.ymt.mirage.car.domain.LeaderStatus;

/**
 * @author zhailiang
 * @since 2016年6月22日
 */
public class LeaderInfo {
	
	private Long id;
	
	private Long userId;
	/**
     * 
     */
    private String name;
    /**
     * 
     */
    private String slogan;
    /**
     * 可见
     */
    private Boolean enable;
    /**
     * 机构大咖
     */
    private Boolean organ;
	/**
	 * 等级
	 */
	private String level;
	/**
	 * 标签
	 */
	private String tags;
	/**
	 * 自我介绍
	 */
	private String intro;
	/**
	 * 
	 */
	private LeaderStatus status;
	/**
	 * 置顶 
	 */
	private Boolean top;
	/**
	 * 置顶顺序
	 */
	private int topIndex;
	/**
	 * 置顶图片
	 */
	private String topImage;
	/**
	 * 头像
	 */
	private String image;
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the userId
	 */
	public Long getUserId() {
		return userId;
	}
	/**
	 * @param userId the userId to set
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	/**
	 * @return the level
	 */
	public String getLevel() {
		return level;
	}
	/**
	 * @param level the level to set
	 */
	public void setLevel(String level) {
		this.level = level;
	}
	/**
	 * @return the tags
	 */
	public String getTags() {
		return tags;
	}
	/**
	 * @param tags the tags to set
	 */
	public void setTags(String tags) {
		this.tags = tags;
	}
	/**
	 * @return the intro
	 */
	public String getIntro() {
		return intro;
	}
	/**
	 * @param intro the intro to set
	 */
	public void setIntro(String intro) {
		this.intro = intro;
	}
	
	/**
	 * @return the top
	 */
	public Boolean getTop() {
		return top;
	}
	/**
	 * @param top the top to set
	 */
	public void setTop(Boolean top) {
		this.top = top;
	}
	/**
	 * @return the status
	 */
	public LeaderStatus getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(LeaderStatus status) {
		this.status = status;
	}
	/**
	 * @return the topImage
	 */
	public String getTopImage() {
		return topImage;
	}
	/**
	 * @param topImage the topImage to set
	 */
	public void setTopImage(String topImage) {
		this.topImage = topImage;
	}
    /**
     * @return the topIndex
     */
    public int getTopIndex() {
        return topIndex;
    }
    /**
     * @param topIndex the topIndex to set
     */
    public void setTopIndex(int topIndex) {
        this.topIndex = topIndex;
    }
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }
    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * @return the slogan
     */
    public String getSlogan() {
        return slogan;
    }
    /**
     * @param slogan the slogan to set
     */
    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }
    /**
     * @return the enable
     */
    public Boolean getEnable() {
        return enable;
    }
    /**
     * @param enable the enable to set
     */
    public void setEnable(Boolean enable) {
        this.enable = enable;
    }
    /**
     * @return the organ
     */
    public Boolean getOrgan() {
        return organ;
    }
    /**
     * @param organ the organ to set
     */
    public void setOrgan(Boolean organ) {
        this.organ = organ;
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
