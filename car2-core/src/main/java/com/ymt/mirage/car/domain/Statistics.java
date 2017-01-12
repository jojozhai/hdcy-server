/*
 * 项目名称：car2-core
 * 类名称: Statistics
 * 创建时间: 2017年1月12日 下午2:11:56
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@Entity
public class Statistics extends DomainImpl {
    
    @Temporal(TemporalType.DATE)
    private Date date;
    
    private String region;
    
    private String number;
    
    private int count;

    /**
     * @return the date
     */
    public Date getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(Date date) {
        this.date = date;
    }

    /**
     * @return the area
     */
    public String getRegion() {
        return region;
    }

    /**
     * @param area the area to set
     */
    public void setRegion(String area) {
        this.region = area;
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
     * @return the number
     */
    public String getNumber() {
        return number;
    }

    /**
     * @param number the number to set
     */
    public void setNumber(String number) {
        this.number = number;
    }
    
}
