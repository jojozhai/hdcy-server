/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
@Entity
public class LotteryParticipator extends Participator {
	private boolean isChange;

	public boolean isChange() {
		return isChange;
	}

	public void setChange(boolean isChange) {
		this.isChange = isChange;
	}

	/**
	 * 
	 */
	@ManyToOne(fetch = FetchType.LAZY)
	private Lottery lottery;
	/**
	 * 
	 */
	private String prize;
	/**
	 * 
	 */
	private boolean win;

	/**
	 * @return the lottery
	 */
	public Lottery getLottery() {
		return lottery;
	}

	/**
	 * @param lottery
	 *            the lottery to set
	 */
	public void setLottery(Lottery lottery) {
		this.lottery = lottery;
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
}
