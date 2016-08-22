/**
 * 
 */
package com.ymt.mirage.car.dto;

/**
 * @author zhailiang
 * @since 2016年6月21日
 */
public class VotePermission {
	
	/**
	 * 
	 */
	private InfoCompleteType infoCompleteType;
	/**
	 * 今天还可以投票的次数
	 */
	private int voteCount;
	/**
	 * 
	 */
	private int voteLimit;
	/**
	 * 
	 */
	private int voteMax;
	
	public VotePermission() {
	}
	
	public VotePermission(InfoCompleteType infoCompleteType, int voteCount, int voteLimit, int voteMax) {
		this.infoCompleteType = infoCompleteType;
		this.voteCount = voteCount;
		this.voteLimit = voteLimit;
		this.voteMax = voteMax;
	}
	/**
	 * @return the infoCompleteType
	 */
	public InfoCompleteType getInfoCompleteType() {
		return infoCompleteType;
	}
	/**
	 * @param infoCompleteType the infoCompleteType to set
	 */
	public void setInfoCompleteType(InfoCompleteType infoCompleteType) {
		this.infoCompleteType = infoCompleteType;
	}
	/**
	 * @return the voteCount
	 */
	public int getVoteCount() {
		return voteCount;
	}
	/**
	 * @param voteCount the voteCount to set
	 */
	public void setVoteCount(int voteCount) {
		this.voteCount = voteCount;
	}

	/**
	 * @return the voteLimit
	 */
	public int getVoteLimit() {
		return voteLimit;
	}

	/**
	 * @param voteLimit the voteLimit to set
	 */
	public void setVoteLimit(int voteLimit) {
		this.voteLimit = voteLimit;
	}

	/**
	 * @return the voteMax
	 */
	public int getVoteMax() {
		return voteMax;
	}

	/**
	 * @param voteMax the voteMax to set
	 */
	public void setVoteMax(int voteMax) {
		this.voteMax = voteMax;
	}

}
