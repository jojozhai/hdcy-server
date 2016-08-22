/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.List;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class VotingInfo extends ParticipationInfo {
	
	/**
	 * 奖品介绍
	 */
	private String giftDesc;
	/**
	 * 
	 */
	private List<String> giftImages;
	/**
	 * 抽奖结果
	 */
	private String result;
	/**
	 * 完善必填信息的用户可投的票数
	 */
	private Integer voteLimit1;
	/**
	 * 完善选填信息的用户可投的票数
	 */
	private Integer voteLimit2;
	/**
	 * @return the giftDesc
	 */
	public String getGiftDesc() {
		return giftDesc;
	}
	/**
	 * @param giftDesc the giftDesc to set
	 */
	public void setGiftDesc(String giftDesc) {
		this.giftDesc = giftDesc;
	}
	/**
	 * @return the gifgImages
	 */
	public List<String> getGiftImages() {
		return giftImages;
	}
	/**
	 * @param gifgImages the gifgImages to set
	 */
	public void setGiftImages(List<String> gifgImages) {
		this.giftImages = gifgImages;
	}
	/**
	 * @return the result
	 */
	public String getResult() {
		return result;
	}
	/**
	 * @param result the result to set
	 */
	public void setResult(String result) {
		this.result = result;
	}
	/**
	 * @return the voteLimit1
	 */
	public Integer getVoteLimit1() {
		return voteLimit1;
	}
	/**
	 * @param voteLimit1 the voteLimit1 to set
	 */
	public void setVoteLimit1(Integer voteLimit1) {
		this.voteLimit1 = voteLimit1;
	}
	/**
	 * @return the voteLimit2
	 */
	public Integer getVoteLimit2() {
		return voteLimit2;
	}
	/**
	 * @param voteLimit2 the voteLimit2 to set
	 */
	public void setVoteLimit2(Integer voteLimit2) {
		this.voteLimit2 = voteLimit2;
	} 

	
}
