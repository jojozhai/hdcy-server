/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * @author zhailiang
 * @since 2016年7月1日
 */
@Entity
public class LotteryHistory extends DomainImpl {

	@ManyToOne
	private LotteryParticipator participator;
	/**
	 * 
	 */
	private String prize;
	/**
	 * 
	 */
	private boolean win;
	/**
	 * @return the prize
	 */
	public String getPrize() {
		return prize;
	}
	/**
	 * @param prize the prize to set
	 */
	public void setPrize(String prize) {
		this.prize = prize;
	}
	/**
	 * @return the participator
	 */
	public LotteryParticipator getParticipator() {
		return participator;
	}
	/**
	 * @param participator the participator to set
	 */
	public void setParticipator(LotteryParticipator participator) {
		this.participator = participator;
	}
	/**
	 * @return the win
	 */
	public boolean isWin() {
		return win;
	}
	/**
	 * @param win the win to set
	 */
	public void setWin(boolean win) {
		this.win = win;
	}
	
}
