/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.Date;

/**
 * @author zhailiang
 * @since 2016年6月20日
 */
public class ContraryParticipatorInfo {

	private Long id;

	private Long userId;

	private Long contraryId;

	private String contraryName;

	private String contraryImage;

	private String headimgurl;

	private String nickname;

	private String realname;

	private Boolean red;

	private String content;

	private int indexNumber;

	private String viewpoint;

	private Boolean state;

	private Date createdTime;

	private String mobile;

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getRealname() {
		return realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	public Date getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Date createdTime) {
		this.createdTime = createdTime;
	}


	/**
     * @return the state
     */
    public Boolean getState() {
        return state;
    }

    /**
     * @param state the state to set
     */
    public void setState(Boolean state) {
        this.state = state;
    }

    /**
	 * @return the nickname
	 */
	public String getNickname() {
		return nickname;
	}

	/**
	 * @param nickname
	 *            the nickname to set
	 */
	public void setNickname(String nickname) {
		this.nickname = nickname;
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
	 * @return the userId
	 */
	public Long getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            the userId to set
	 */
	public void setUserId(Long userId) {
		this.userId = userId;
	}

	/**
	 * @return the headimgurl
	 */
	public String getHeadimgurl() {
		return headimgurl;
	}

	/**
	 * @param headimgurl
	 *            the headimgurl to set
	 */
	public void setHeadimgurl(String headimgurl) {
		this.headimgurl = headimgurl;
	}

	/**
	 * @return the red
	 */
	public Boolean getRed() {
		return red;
	}

	/**
	 * @param red
	 *            the red to set
	 */
	public void setRed(Boolean red) {
		this.red = red;
	}

	/**
	 * @return the content
	 */
	public String getContent() {
		return content;
	}

	/**
	 * @param content
	 *            the content to set
	 */
	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * @return the contraryId
	 */
	public Long getContraryId() {
		return contraryId;
	}

	/**
	 * @param contraryId
	 *            the contraryId to set
	 */
	public void setContraryId(Long contraryId) {
		this.contraryId = contraryId;
	}

	/**
	 * @return the contraryName
	 */
	public String getContraryName() {
		return contraryName;
	}

	/**
	 * @param contraryName
	 *            the contraryName to set
	 */
	public void setContraryName(String contraryName) {
		this.contraryName = contraryName;
	}

	/**
	 * @return the contraryImage
	 */
	public String getContraryImage() {
		return contraryImage;
	}

	/**
	 * @param contraryImage
	 *            the contraryImage to set
	 */
	public void setContraryImage(String contraryImage) {
		this.contraryImage = contraryImage;
	}

	/**
	 * @return the indexNumber
	 */
	public int getIndexNumber() {
		return indexNumber;
	}

	/**
	 * @param indexNumber
	 *            the indexNumber to set
	 */
	public void setIndexNumber(int indexNumber) {
		this.indexNumber = indexNumber;
	}

	/**
	 * @return the viewpoint
	 */
	public String getViewpoint() {
		return viewpoint;
	}

	/**
	 * @param viewpoint
	 *            the viewpoint to set
	 */
	public void setViewpoint(String viewpoint) {
		this.viewpoint = viewpoint;
	}

	@Override
	public String toString() {
		return "ContraryParticipatorInfo [id=" + id + ", userId=" + userId + ", contraryId=" + contraryId
				+ ", contraryName=" + contraryName + ", contraryImage=" + contraryImage + ", headimgurl=" + headimgurl
				+ ", nickname=" + nickname + ", red=" + red + ", content=" + content + ", indexNumber=" + indexNumber
				+ ", viewpoint=" + viewpoint + ", state=" + state + "]";
	}

}
