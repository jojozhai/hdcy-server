/*
 * 项目名称：car2-core
 * 类名称: DrawPageStatisticsInfo
 * 创建时间: 2017年1月12日 下午3:41:40
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.Date;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public class DrawPageStatisticsInfo {
    
    private Date date;
    
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
    
}
