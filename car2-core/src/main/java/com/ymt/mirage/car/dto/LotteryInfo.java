/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.List;

import com.ymt.mirage.car.domain.Prize;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
public class LotteryInfo extends ParticipationInfo {
	
	/**
	 * 
	 */
	private List<Prize> prizes;
	
	/**
	 * 
	 */
	private List<String> colors;
	/**
	 * 规则
	 */
	private String rule;
	/**
	 * 奖品
	 */
	private String gifts;
	
	/**
	 * 完善必填信息的可抽奖数
	 */
	private int limit1;
	/**
	 * 完善所有信息的可抽奖数
	 */
	private int limit2;
	
	/**
	 * @return the rule
	 */
	public String getRule() {
		return rule;
	}
	/**
	 * @param rule the rule to set
	 */
	public void setRule(String rule) {
		this.rule = rule;
	}
	/**
	 * @return the gifts
	 */
	public String getGifts() {
		return gifts;
	}
	/**
	 * @param gifts the gifts to set
	 */
	public void setGifts(String gifts) {
		this.gifts = gifts;
	}
	/**
	 * @return the colors
	 */
	public List<String> getColors() {
		return colors;
	}
	/**
	 * @param colors the colors to set
	 */
	public void setColors(List<String> colors) {
		this.colors = colors;
	}
	/**
	 * @return the prizes
	 */
	public List<Prize> getPrizes() {
		return prizes;
	}
	/**
	 * @param prizes the prizes to set
	 */
	public void setPrizes(List<Prize> prizes) {
		this.prizes = prizes;
	}
	/**
	 * @return the limit1
	 */
	public int getLimit1() {
		return limit1;
	}
	/**
	 * @param limit1 the limit1 to set
	 */
	public void setLimit1(int limit1) {
		this.limit1 = limit1;
	}
	/**
	 * @return the limit2
	 */
	public int getLimit2() {
		return limit2;
	}
	/**
	 * @param limit2 the limit2 to set
	 */
	public void setLimit2(int limit2) {
		this.limit2 = limit2;
	}
	
}
