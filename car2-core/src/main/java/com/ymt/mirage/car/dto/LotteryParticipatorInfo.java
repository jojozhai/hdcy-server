/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.Date;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
public class LotteryParticipatorInfo {

	private Long id;
	private Date createdTime;
	private Long lotteryId;
	private Long userId;
	private String prize;
	private String userNickname;
	private String userRealname;
	private String userMobile;
	private boolean win;
	private boolean isChange;
	private int count;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public boolean isChange() {
		return isChange;
	}

	public void setChange(boolean isChange) {
		this.isChange = isChange;
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
	 * @return the lotteryId
	 */
	public Long getLotteryId() {
		return lotteryId;
	}

	/**
	 * @param lotteryId
	 *            the lotteryId to set
	 */
	public void setLotteryId(Long lotteryId) {
		this.lotteryId = lotteryId;
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
	 * @return the prize
	 */
	public String getPrize() {
		return prize;
	}

	/**
	 * @param prize
	 *            the prize to set
	 */
	public void setPrize(String prize) {
		this.prize = prize;
	}

	/**
	 * @return the userNickname
	 */
	public String getUserNickname() {
		return userNickname;
	}

	/**
	 * @param userNickname
	 *            the userNickname to set
	 */
	public void setUserNickname(String userNickname) {
		this.userNickname = userNickname;
	}

	/**
	 * @return the userRealname
	 */
	public String getUserRealname() {
		return userRealname;
	}

	/**
	 * @param userRealname
	 *            the userRealname to set
	 */
	public void setUserRealname(String userRealname) {
		this.userRealname = userRealname;
	}

	/**
	 * @return the userMobile
	 */
	public String getUserMobile() {
		return userMobile;
	}

	/**
	 * @param userMobile
	 *            the userMobile to set
	 */
	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}

	/**
	 * @return the win
	 */
	public boolean isWin() {
		return win;
	}

	/**
	 * @param win
	 *            the win to set
	 */
	public void setWin(boolean win) {
		this.win = win;
	}

    /**
     * @return the createdDate
     */
    public Date getCreatedTime() {
        return createdTime;
    }

    /**
     * @param createdDate the createdDate to set
     */
    public void setCreatedTime(Date createdDate) {
        this.createdTime = createdDate;
    }

}
