/*
 * 项目名称：car2-core
 * 类名称: DrawRegionStatisticsItem
 * 创建时间: 2017年1月12日 下午5:10:02
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.dto;

import java.math.BigDecimal;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public class DrawRegionStatisticsItem {
    
    private String region;
    
    private Long count;
    
    private BigDecimal rate;

    /**
     * @return the region
     */
    public String getRegion() {
        return region;
    }

    /**
     * @param region the region to set
     */
    public void setRegion(String region) {
        this.region = region;
    }

    /**
     * @return the count
     */
    public Long getCount() {
        return count;
    }

    /**
     * @param count the count to set
     */
    public void setCount(Long count) {
        this.count = count;
    }

    /**
     * @return the rate
     */
    public BigDecimal getRate() {
        return rate;
    }

    /**
     * @param rate the rate to set
     */
    public void setRate(BigDecimal rate) {
        this.rate = rate;
    }

}
