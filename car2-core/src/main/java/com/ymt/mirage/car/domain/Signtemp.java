/*
 * 项目名称：car2-core
 * 类名称: Signtemp
 * 创建时间: 2016年10月7日 下午12:04:26
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Entity
public class Signtemp extends DomainImpl {
    
    /**
     * 姓名
     */
    private String name;
    /**
     * 单位
     */
    private String company;
    /**
     * 职位
     */
    private String title;
    /**
     * 电话
     */
    private String mobile;
    /**
     * 住宿
     */
    private boolean stay;
    /**
     * 住宿开始时间
     */
    private Date stayStartTime;
    /**
     * 住宿结束时间
     */
    private Date stayEndTime;
    /**
     * 邀请者
     */
    private String inviter;
    /**
     * 参加的论坛 
     */
    @ElementCollection
    private List<String> forums;
    
    /**
     * @return the name
     */
    public String getName() {
        return name;
    }
    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }
    /**
     * @return the company
     */
    public String getCompany() {
        return company;
    }
    /**
     * @param company the company to set
     */
    public void setCompany(String company) {
        this.company = company;
    }
    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }
    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }
    /**
     * @return the mobile
     */
    public String getMobile() {
        return mobile;
    }
    /**
     * @param mobile the mobile to set
     */
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    /**
     * @return the stay
     */
    public boolean isStay() {
        return stay;
    }
    /**
     * @param stay the stay to set
     */
    public void setStay(boolean stay) {
        this.stay = stay;
    }
    /**
     * @return the stayStartTime
     */
    public Date getStayStartTime() {
        return stayStartTime;
    }
    /**
     * @param stayStartTime the stayStartTime to set
     */
    public void setStayStartTime(Date stayStartTime) {
        this.stayStartTime = stayStartTime;
    }
    /**
     * @return the stayEndTime
     */
    public Date getStayEndTime() {
        return stayEndTime;
    }
    /**
     * @param stayEndTime the stayEndTime to set
     */
    public void setStayEndTime(Date stayEndTime) {
        this.stayEndTime = stayEndTime;
    }
    /**
     * @return the inviter
     */
    public String getInviter() {
        return inviter;
    }
    /**
     * @param inviter the inviter to set
     */
    public void setInviter(String inviter) {
        this.inviter = inviter;
    }
    /**
     * @return the forums
     */
    public List<String> getForums() {
        return forums;
    }
    /**
     * @param forums the forums to set
     */
    public void setForums(List<String> forums) {
        this.forums = forums;
    }

}
