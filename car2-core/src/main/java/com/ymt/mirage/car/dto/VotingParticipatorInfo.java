/**
 * 
 */
package com.ymt.mirage.car.dto;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public class VotingParticipatorInfo {
	
	private Long id;
	
	private Long votingId;
	
	private String votingName;
	
	private String votingImage;
	
	private Long userId;
	
	private Boolean state;
	
	private String headimgurl;
	
	private String nickname;
	
	private String level;
	
	private String tags;
	
	private String image;
	/**
	 * 留言
	 */
	private String message;
	/**
	 * 编号
	 */
	private String number;
	/**
	 * 
	 */
	private Integer numberi;
	/**
	 * 投票总数
	 */
	private Integer voteCount;

	/**
	 * @return the activityId
	 */
	public Long getVotingId() {
		return votingId;
	}

	/**
	 * @param activityId the activityId to set
	 */
	public void setVotingId(Long activityId) {
		this.votingId = activityId;
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
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * @return the number
	 */
	public String getNumber() {
		return number;
	}

	/**
	 * @param number the number to set
	 */
	public void setNumber(String number) {
		this.number = number;
	}

	/**
	 * @return the voteCount
	 */
	public Integer getVoteCount() {
		return voteCount;
	}

	/**
	 * @param voteCount the voteCount to set
	 */
	public void setVoteCount(Integer voteCount) {
		this.voteCount = voteCount;
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
	 * @return the numberi
	 */
	public Integer getNumberi() {
		return numberi;
	}

	/**
	 * @param numberi the numberi to set
	 */
	public void setNumberi(Integer numberi) {
		this.numberi = numberi;
	}

	/**
	 * @return the votingName
	 */
	public String getVotingName() {
		return votingName;
	}

	/**
	 * @param votingName the votingName to set
	 */
	public void setVotingName(String votingName) {
		this.votingName = votingName;
	}

	/**
	 * @return the votingImage
	 */
	public String getVotingImage() {
		return votingImage;
	}

	/**
	 * @param votingImage the votingImage to set
	 */
	public void setVotingImage(String votingImage) {
		this.votingImage = votingImage;
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

}
