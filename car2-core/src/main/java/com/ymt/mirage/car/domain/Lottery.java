/**
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Lob;

import org.apache.commons.lang.StringUtils;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
@Entity
public class Lottery extends Participation {
	
	public Lottery() {
		setType(ParticipationType.LOTTERY);
	}
	/**
	 * 
	 */
	@ElementCollection
	private List<Prize> prizes;
	/**
	 * 规则
	 */
	@Lob
	private String rule;
	/**
	 * 奖品
	 */
	@Lob
	private String gifts;
	/**
	 * 抽奖次数
	 */
	private int limit;
//	/**
//	 * 完善必填信息的可抽奖数
//	 */
//	private int limit1;
//	/**
//	 * 完善所有信息的可抽奖数
//	 */
//	private int limit2;
	/**
	 * @param prize
	 * @return
	 * @author zhailiang
	 * @since 2016年7月13日
	 */
	public boolean isWin(String prizeStr) {
		for (Prize prize : prizes) {
			if(StringUtils.equals(prize.getName(), prizeStr)){
				return prize.isWin();
			}
		}
		return false;
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
     * @return the limit
     */
    public int getLimit() {
        return limit;
    }
    /**
     * @param limit the limit to set
     */
    public void setLimit(int limit) {
        this.limit = limit;
    }
    public int getMostCountWinPrizeIndex() {
        int index = 0;
        int count = 0;
        for (int i = 0; i < prizes.size(); i++) {
            Prize prize = prizes.get(i);
            if(prize.getCount() > count && prize.isWin()){
                count = prize.getCount();
                index = i;
            }
        }
        return index;
    }

//	/**
//	 * @return the limit1
//	 */
//	public int getLimit1() {
//		return limit1;
//	}
//
//	/**
//	 * @param limit1 the limit1 to set
//	 */
//	public void setLimit1(int limit1) {
//		this.limit1 = limit1;
//	}
//
//	/**
//	 * @return the limit2
//	 */
//	public int getLimit2() {
//		return limit2;
//	}
//
//	/**
//	 * @param limit2 the limit2 to set
//	 */
//	public void setLimit2(int limit2) {
//		this.limit2 = limit2;
//	}

}
