/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.Date;
import java.util.List;

import org.joda.time.DateTime;

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
	 * 省
	 */
	private String province;
	/**
	 * 市
	 */
	private String city;
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
	private int hotplus;
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
	private Boolean finish;
	/**
     * 
     */
    private Boolean enable;
	/**
	 * 主办方
	 */
	private Long sponsorId;
	/**
	 * 主办方名称
	 */
	private String sponsorName;
	/**
	 * 主办方图片
	 */
	private String sponsorImage;
	/**
     * 客服Id
     */
    private Long waiterId;
    /**
     * 客服信息 
     */
    private WaiterInfo waiterInfo;
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
    /**
     * 活动状态 
     */
    private ParticipationState state;

	/**
     * @return the sponsorName
     */
    public String getSponsorName() {
        return sponsorName;
    }

    /**
     * @param sponsorName the sponsorName to set
     */
    public void setSponsorName(String sponsorName) {
        this.sponsorName = sponsorName;
    }

    /**
     * @return the sponsorImage
     */
    public String getSponsorImage() {
        return sponsorImage;
    }

    /**
     * @param sponsorImage the sponsorImage to set
     */
    public void setSponsorImage(String sponsorImage) {
        this.sponsorImage = sponsorImage;
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

	public Long getSponsorId() {
		return sponsorId;
	}

	public void setSponsorId(Long sponsorId) {
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

    /**
     * @return the waiterId
     */
    public Long getWaiterId() {
        return waiterId;
    }

    /**
     * @param waiterId the waiterId to set
     */
    public void setWaiterId(Long waiterId) {
        this.waiterId = waiterId;
    }

    /**
     * @return the waiterInfo
     */
    public WaiterInfo getWaiterInfo() {
        return waiterInfo;
    }

    /**
     * @param waiterInfo the waiterInfo to set
     */
    public void setWaiterInfo(WaiterInfo waiterInfo) {
        this.waiterInfo = waiterInfo;
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

    /**
     * @return the finish
     */
    public Boolean getFinish() {
        return finish;
    }

    /**
     * @param finish the finish to set
     */
    public void setFinish(Boolean finish) {
        this.finish = finish;
    }

    /**
     * @return the state
     */
    public ParticipationState getState() {
        if(new DateTime(getStartTime()).isAfterNow()){
            return ParticipationState.NOT_START;
        }else if(new DateTime(getEndTime()).isBeforeNow()) {
            return ParticipationState.FINISH;
        }else{
            return ParticipationState.ONGOING;
        }
    }

    /**
     * @param state the state to set
     */
    public void setState(ParticipationState state) {
        this.state = state;
    }

    /**
     * @return the province
     */
    public String getProvince() {
        return province;
    }

    /**
     * @param province the province to set
     */
    public void setProvince(String province) {
        this.province = province;
    }

    /**
     * @return the city
     */
    public String getCity() {
        return city;
    }

    /**
     * @param city the city to set
     */
    public void setCity(String city) {
        this.city = city;
    }


}
