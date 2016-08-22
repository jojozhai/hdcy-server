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
	
	private String nickname;
	
	private String headimgurl;
	
	private String level;
	
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
	 * 参加活动的次数
	 */
	private int participationCount;
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
	 * @return the nickname
	 */
	public String getNickname() {
		return nickname;
	}
	/**
	 * @param nickname the nickname to set
	 */
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	/**
	 * @return the headimgurl
	 */
	public String getHeadimgurl() {
		return headimgurl;
	}
	/**
	 * @param headimgurl the headimgurl to set
	 */
	public void setHeadimgurl(String headimgurl) {
		this.headimgurl = headimgurl;
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
	 * @return the participationCount
	 */
	public int getParticipationCount() {
		return participationCount;
	}
	/**
	 * @param participationCount the participationCount to set
	 */
	public void setParticipationCount(int participationCount) {
		this.participationCount = participationCount;
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
}
