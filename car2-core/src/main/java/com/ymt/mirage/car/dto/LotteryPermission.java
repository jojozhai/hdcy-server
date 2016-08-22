/**
 * 
 */
package com.ymt.mirage.car.dto;

/**
 * @author zhailiang
 * @since 2016年6月21日
 */
public class LotteryPermission {
	
	/**
	 * 
	 */
	private InfoCompleteType infoCompleteType;
	/**
	 * 今天还可以参与的次数
	 */
	private int count;
	/**
	 * 当前权限最大可参与数
	 */
	private int limit;
	/**
	 * 最大权限最大可参与数
	 */
	private int max;
	/**
	 * 是否已中奖
	 */
	private boolean win;
	/**
	 * 
	 */
	private String prize;
	
	public LotteryPermission() {
	}
	
	public LotteryPermission(InfoCompleteType infoCompleteType, int count, int limit, int max) {
		this.infoCompleteType = infoCompleteType;
		this.count = count;
		this.limit = limit;
		this.max = max;
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
	 * @return the count
	 */
	public int getCount() {
		return count;
	}

	/**
	 * @param count the count to set
	 */
	public void setCount(int count) {
		this.count = count;
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

	/**
	 * @return the max
	 */
	public int getMax() {
		return max;
	}

	/**
	 * @param max the max to set
	 */
	public void setMax(int max) {
		this.max = max;
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
	
}
