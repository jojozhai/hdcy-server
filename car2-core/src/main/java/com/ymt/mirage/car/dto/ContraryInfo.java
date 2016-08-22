/**
 * 
 */
package com.ymt.mirage.car.dto;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class ContraryInfo extends ParticipationInfo {
	
	private Long id;
	/**
	 * 
	 */
	private String red;
	/**
	 * 
	 */
	private String blue;
	/**
	 * 
	 */
	private Integer redCount;
	/**
	 * 
	 */
	private Integer blueCount;
	/**
	 * 红方按钮文字
	 */
	private String redButton;
	/**
	 * 蓝方按钮文字
	 */
	private String blueButton;
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
	public Integer getRedCount() {
		return redCount;
	}
	/**
	 * @param redCount the redCount to set
	 */
	public void setRedCount(Integer redCount) {
		this.redCount = redCount;
	}
	/**
	 * @return the blueCount
	 */
	public Integer getBlueCount() {
		return blueCount;
	}
	/**
	 * @param blueCount the blueCount to set
	 */
	public void setBlueCount(Integer blueCount) {
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
