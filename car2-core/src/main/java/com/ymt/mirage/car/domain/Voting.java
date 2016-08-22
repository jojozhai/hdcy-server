/**
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Lob;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
public class Voting extends Participation {
	
	public Voting() {
		setType(ParticipationType.VOTING);
	}

	/**
	 * 奖品描述
	 */
	@Lob
	private String giftDesc;
	/**
	 * 奖品图片
	 */
	@ElementCollection
	private List<String> giftImages;
	/**
	 * 抽奖结果
	 */
	@Lob
	private String result;
	/**
	 * 完善必填信息的用户可投的票数
	 */
	private int voteLimit1;
	/**
	 * 完善选填信息的用户可投的票数
	 */
	private int voteLimit2;

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
	 * @return the giftImages
	 */
	public List<String> getGiftImages() {
		return giftImages;
	}

	/**
	 * @param giftImages the giftImages to set
	 */
	public void setGiftImages(List<String> giftImages) {
		this.giftImages = giftImages;
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
	public int getVoteLimit1() {
		return voteLimit1;
	}

	/**
	 * @param voteLimit1 the voteLimit1 to set
	 */
	public void setVoteLimit1(int voteLimit1) {
		this.voteLimit1 = voteLimit1;
	}

	/**
	 * @return the voteLimit2
	 */
	public int getVoteLimit2() {
		return voteLimit2;
	}

	/**
	 * @param voteLimit2 the voteLimit2 to set
	 */
	public void setVoteLimit2(int voteLimit2) {
		this.voteLimit2 = voteLimit2;
	}
	
}
