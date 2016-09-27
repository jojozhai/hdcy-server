/**
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ymt.mirage.social.dto.Commentable;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Participation extends DomainImpl implements Commentable {

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
	@Enumerated(EnumType.STRING)
	private ParticipationType type;
	/**
	 * 活动开始时间
	 */
	@Temporal(TemporalType.TIMESTAMP)
	private Date startTime;
	/**
	 * 活动结束时间
	 */
	@Temporal(TemporalType.TIMESTAMP)
	private Date endTime;
	/**
	 * 是否已经结束
	 */
	private boolean finish;
	/**
	 * 是否在前台显示
	 */
	private boolean enable;
	/**
	 * 热度
	 */
	private int hot;
	/**
	 * 热度加权
	 */
	private int hotplus;
	/**
	 * 活动地址
	 */
	private String address;
	/**
	 * 加权人数
	 */
	private int weighting;
	/**
	 * 活动介绍
	 */
	@Lob
	private String desc;
	/**
	 * 活动评论
	 */
	@Lob
	private String comment;
	/**
	 * 主办方
	 */
	@ManyToOne
	private Sponsor sponsor;
	
	/**
	 * 置顶
	 */
	private boolean top;
	/**
     * 置顶
     */
    private int topIndex;
    /**
     * 推荐
     */
    private boolean recommend;

	public Sponsor getSponsor() {
		return sponsor;
	}

	public void setSponsor(Sponsor sponsor) {
		this.sponsor = sponsor;
	}

	/**
	 * 浏览量
	 */
	private int browseval;
	/**
	 * 吸粉数
	 */
	private int fansval;
	/**
	 * 关键词
	 */
	@OneToMany
	private List<KeyWord> kwlist;

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
	public boolean isEnable() {
		return enable;
	}

	/**
     * @param enable the enable to set
     */
    public void setEnable(boolean enable) {
        this.enable = enable;
    }

    /**
     * @return the top
     */
    public boolean isTop() {
        return top;
    }

    /**
     * @param top the top to set
     */
    public void setTop(boolean top) {
        this.top = top;
    }

    /**
     * @return the topIndex
     */
    public int getTopIndex() {
        return topIndex;
    }

    /**
     * @param topIndex the topIndex to set
     */
    public void setTopIndex(int topIndex) {
        this.topIndex = topIndex;
    }

    /**
     * @return the recommend
     */
    public boolean isRecommend() {
        return recommend;
    }

    /**
     * @param recommend the recommend to set
     */
    public void setRecommend(boolean recommend) {
        this.recommend = recommend;
    }

    /**
     * @return the hotplus
     */
    public int getHotplus() {
        return hotplus;
    }

    /**
     * @param hotplus the hotplus to set
     */
    public void setHotplus(int hotplus) {
        this.hotplus = hotplus;
    }

}
