/*
 * 项目名称：car2-core
 * 类名称: DrawRegionStatisticsInfo
 * 创建时间: 2017年1月12日 下午5:09:10
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.ArrayList;
import java.util.List;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public class DrawRegionStatisticsInfo {
    
    private String date;
    
    private List<DrawRegionStatisticsItem> items;
    
    /**
     * @param e
     * @return
     * @see java.util.List#add(java.lang.Object)
     */
    public boolean add(DrawRegionStatisticsItem e) {
        if(items == null) {
            items = new ArrayList<>();
        }
        return items.add(e);
    }

    /**
     * @return the items
     */
    public List<DrawRegionStatisticsItem> getItems() {
        return items;
    }

    /**
     * @param items the items to set
     */
    public void setItems(List<DrawRegionStatisticsItem> items) {
        this.items = items;
    }

    /**
     * @return the date
     */
    public String getDate() {
        return date;
    }

    /**
     * @param date the date to set
     */
    public void setDate(String date) {
        this.date = date;
    }
    
}
