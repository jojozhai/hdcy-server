/**
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ymt.mirage.user.domain.User;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * @author zhailiang
 * @since 2016年6月22日
 */
@Entity
public class Leader extends DomainImpl {
    
	@ManyToOne
	private User user;
	/**
	 * 自我介绍
	 */
	@Column(length = 500)
	private String intro;
	/**
	 * 
	 */
	@Enumerated(EnumType.STRING)
	private LeaderStatus status;
	/**
	 * 
	 */
	@Temporal(TemporalType.TIMESTAMP)
	private Date approveDate;
	/**
	 * 置顶 
	 */
	private boolean top;
	/**
	 * 置顶顺序号
	 */
	private int topIndex;
	/**
	 * 置顶 
	 */
	private String topImage;
	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}
	/**
	 * @return the intro
	 */
	public String getIntro() {
		return intro;
	}
	/**
	 * @param intro the intro to set
	 */
	public void setIntro(String intro) {
		this.intro = intro;
	}
	/**
	 * @return the status
	 */
	public LeaderStatus getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(LeaderStatus status) {
		this.status = status;
	}
	/**
	 * @return the approveDate
	 */
	public Date getApproveDate() {
		return approveDate;
	}
	/**
	 * @param approveDate the approveDate to set
	 */
	public void setApproveDate(Date approveDate) {
		this.approveDate = approveDate;
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
	 * @return the topImage
	 */
	public String getTopImage() {
		return topImage;
	}
	/**
	 * @param topImage the topImage to set
	 */
	public void setTopImage(String topImage) {
		this.topImage = topImage;
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
	
}
