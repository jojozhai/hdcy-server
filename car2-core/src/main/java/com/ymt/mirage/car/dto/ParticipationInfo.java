/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.Date;
import java.util.List;

import com.ymt.mirage.car.domain.KeyWord;
import com.ymt.mirage.car.domain.ParticipationType;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class ParticipationInfo {

	private Long id;
	/**
	 * 活动名称
	 */
	private String name;
	/**
	 * 主题图
	 */
	private String image;
	/**
	 * 活动类型
	 */
	private ParticipationType type;
	/**
	 * 
	 */
	private String sortType;
	/**
	 * 
	 */
	private String actType;
	/**
	 * 活动开始时间
	 */
	private Date startTime;
	/**
	 * 活动结束时间
	 */
	private Date endTime;
	/**
	 * 热度
	 */
	private int hot;
	/**
	 * 活动地址
	 */
	private String address;
	/**
	 * 活动介绍
	 */
	private String desc;
	/**
	 * 活动评论
	 */
	private String comment;
	/**
	 * 
	 */
	private boolean finish;
	/**
     * 
     */
    private Boolean enable;
	/**
	 * 主办方
	 */
	private long sponsorId;
	/**
	 * 主办方名称
	 */
	private String sponsor;
	/**
	 * 浏览量
	 */
	private int browseval;
	/**
	 * 吸粉数
	 */
	private int fansval;
	/**
     * 置顶
     */
    private Boolean top;
    /**
     * 置顶顺序
     */
    private Integer topIndex;
    /**
     * 推荐
     */
    private Boolean recommend;

	public String getSponsor() {
		return sponsor;
	}

	public void setSponsor(String sponsor) {
		this.sponsor = sponsor;
	}

	/**
	 * 关键字
	 */
	private List<KeyWord> kwlist;
	/**
	 * 权数
	 */
	private int weighting;

	public int getWeighting() {
		return weighting;
	}

	public void setWeighting(int weighting) {
		this.weighting = weighting;
	}

	public List<KeyWord> getKwlist() {
		return kwlist;
	}

	public void setKwlist(List<KeyWord> kwlist) {
		this.kwlist = kwlist;
	}

	public long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(long sponsorId) {
		this.sponsorId = sponsorId;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the type
	 */
	public ParticipationType getType() {
		return type;
	}

	/**
	 * @param type
	 *            the type to set
	 */
	public void setType(ParticipationType type) {
		this.type = type;
	}

	/**
	 * @return the startTime
	 */
	public Date getStartTime() {
		return startTime;
	}

	/**
	 * @param startTime
	 *            the startTime to set
	 */
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	/**
	 * @return the endTime
	 */
	public Date getEndTime() {
		return endTime;
	}

	/**
	 * @param endTime
	 *            the endTime to set
	 */
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	/**
	 * @return the hot
	 */
	public int getHot() {
		return hot;
	}

	/**
	 * @param hot
	 *            the hot to set
	 */
	public void setHot(int hot) {
		this.hot = hot;
	}

	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address
	 *            the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @return the desc
	 */
	public String getDesc() {
		return desc;
	}

	/**
	 * @param desc
	 *            the desc to set
	 */
	public void setDesc(String desc) {
		this.desc = desc;
	}

	/**
	 * @return the comments
	 */
	public String getComment() {
		return comment;
	}

	/**
	 * @param comments
	 *            the comments to set
	 */
	public void setComment(String comment) {
		this.comment = comment;
	}

	/**
	 * @return the image
	 */
	public String getImage() {
		return image;
	}

	/**
	 * @param image
	 *            the image to set
	 */
	public void setImage(String image) {
		this.image = image;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the finish
	 */
	public boolean isFinish() {
		return finish;
	}

	/**
	 * @param finish
	 *            the finish to set
	 */
	public void setFinish(boolean finish) {
		this.finish = finish;
	}

	/**
	 * @return the sortType
	 */
	public String getSortType() {
		return sortType;
	}

	/**
	 * @param sortType
	 *            the sortType to set
	 */
	public void setSortType(String sortType) {
		this.sortType = sortType;
	}

	/**
	 * @return the actType
	 */
	public String getActType() {
		return actType;
	}

	/**
	 * @param actType
	 *            the actType to set
	 */
	public void setActType(String actType) {
		this.actType = actType;
	}

	public int getBrowseval() {
		return browseval;
	}

	public void setBrowseval(int browseval) {
		this.browseval = browseval;
	}

	public int getFansval() {
		return fansval;
	}

	public void setFansval(int fansval) {
		this.fansval = fansval;
	}

    /**
     * @return the enable
     */
    public Boolean getEnable() {
        return enable;
    }

    /**
     * @param enable the enable to set
     */
    public void setEnable(Boolean enable) {
        this.enable = enable;
    }

    /**
     * @return the top
     */
    public Boolean getTop() {
        return top;
    }

    /**
     * @param top the top to set
     */
    public void setTop(Boolean top) {
        this.top = top;
    }

    /**
     * @return the topIndex
     */
    public Integer getTopIndex() {
        return topIndex;
    }

    /**
     * @param topIndex the topIndex to set
     */
    public void setTopIndex(Integer topIndex) {
        this.topIndex = topIndex;
    }

    /**
     * @return the recommend
     */
    public Boolean getRecommend() {
        return recommend;
    }

    /**
     * @param recommend the recommend to set
     */
    public void setRecommend(Boolean recommend) {
        this.recommend = recommend;
    }

}
