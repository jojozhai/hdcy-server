/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

/**
 * @author zhailiang
 * @since 2016年6月20日
 */
@Entity
public class Contrary extends Participation {

	public Contrary() {
		setType(ParticipationType.CONTRARY);
	}
	
	/**
	 * 红方观点
	 */
	private String red;
	/**
	 * 蓝方观点
	 */
	private String blue;
	/**
	 * 红方票数
	 */
	private int redCount;
	/**
	 * 蓝方票数
	 */
	private int blueCount;
	/**
	 * 红方按钮文字
	 */
	private String redButton;
	/**
	 * 蓝方按钮文字
	 */
	private String blueButton;
	/**
	 * @return the red
	 */
	public String getRed() {
		return red;
	}
	/**
	 * @param red the red to set
	 */
	public void setRed(String red) {
		this.red = red;
	}
	/**
	 * @return the blue
	 */
	public String getBlue() {
		return blue;
	}
	/**
	 * @param blue the blue to set
	 */
	public void setBlue(String blue) {
		this.blue = blue;
	}
	/**
	 * @return the redCount
	 */
	public int getRedCount() {
		return redCount;
	}
	/**
	 * @param redCount the redCount to set
	 */
	public void setRedCount(int redCount) {
		this.redCount = redCount;
	}
	/**
	 * @return the blueCount
	 */
	public int getBlueCount() {
		return blueCount;
	}
	/**
	 * @param blueCount the blueCount to set
	 */
	public void setBlueCount(int blueCount) {
		this.blueCount = blueCount;
	}
	/**
	 * @return the redButton
	 */
	public String getRedButton() {
		return redButton;
	}
	/**
	 * @param redButton the redButton to set
	 */
	public void setRedButton(String redButton) {
		this.redButton = redButton;
	}
	/**
	 * @return the blueButton
	 */
	public String getBlueButton() {
		return blueButton;
	}
	/**
	 * @param blueButton the blueButton to set
	 */
	public void setBlueButton(String blueButton) {
		this.blueButton = blueButton;
	}
	
}
