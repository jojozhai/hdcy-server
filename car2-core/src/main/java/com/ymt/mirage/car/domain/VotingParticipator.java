/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * 参与者信息
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
public class VotingParticipator extends Participator {
	
	/**
	 * 
	 */
	@ManyToOne
	private Voting voting;
	/**
	 * 图片
	 */
	private String image;
	/**
	 * 留言
	 */
	private String message;
	/**
	 * 状态
	 */
	private boolean state;
	/**
	 * 编号
	 */
	private String number;
	/**
	 * 编号
	 */
	private int numberi;
	/**
	 * 投票总数
	 */
	private int voteCount;
	/**
	 * @return the vote
	 */
	public Voting getVoting() {
		return voting;
	}
	/**
	 * @param vote the vote to set
	 */
	public void setVoting(Voting vote) {
		this.voting = vote;
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
	 * @return the numberi
	 */
	public int getNumberi() {
		return numberi;
	}
	/**
	 * @param numberi the numberi to set
	 */
	public void setNumberi(int numberi) {
		this.numberi = numberi;
	}
	public boolean isState() {
		return state;
	}
	public void setState(boolean state) {
		this.state = state;
	}
	
}
