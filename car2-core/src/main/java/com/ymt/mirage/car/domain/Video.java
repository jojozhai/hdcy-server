/*
 * 项目名称：car2-core
 * 类名称: Video
 * 创建时间: 2016年9月6日 上午9:36:58
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.Date;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Entity
public class Video extends DomainImpl {
    
    /**
     * 视频名称
     */
    private String name;
    /**
     * 视频链接 
     */
    private String url;
    /**
     * 视频连接2
     */
    private String url2;
    /**
     * 置顶
     */
    private boolean top;
    /**
     * 发布
     */
    private boolean enable;
    /**
     * 图片
     */
    private String image;
    /**
     * 观看次数加成
     */
    private int viewCountPlus;
    /**
     * 观看次数
     */
    private int viewCount;
    /**
     * 是否是直播
     */
    private boolean live;
    /**
     * 开始时间
     */
    private Date startTime;
    /**
     * 视频时长
     */
    private String length;
    /**
     * 视频描述 
     */
    private String desc;
    
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
     * @return the url
     */
    public String getUrl() {
        return url;
    }
    /**
     * @param url the url to set
     */
    public void setUrl(String url) {
        this.url = url;
    }
    /**
     * @return the image
     */
    public String getImage() {
        return image;
    }
    /**
     * @param image the image to set
     */
    public void setImage(String image) {
        this.image = image;
    }
    /**
     * @return the viewCountPlus
     */
    public int getViewCountPlus() {
        return viewCountPlus;
    }
    /**
     * @param viewCountPlus the viewCountPlus to set
     */
    public void setViewCountPlus(int viewCountPlus) {
        this.viewCountPlus = viewCountPlus;
    }
    /**
     * @return the viewCount
     */
    public int getViewCount() {
        return viewCount;
    }
    /**
     * @param viewCount the viewCount to set
     */
    public void setViewCount(int viewCount) {
        this.viewCount = viewCount;
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
     * @return the live
     */
    public boolean isLive() {
        return live;
    }
    /**
     * @param live the live to set
     */
    public void setLive(boolean live) {
        this.live = live;
    }
    /**
     * @return the startTime
     */
    public Date getStartTime() {
        return startTime;
    }
    /**
     * @param startTime the startTime to set
     */
    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }
    /**
     * @return the length
     */
    public String getLength() {
        return length;
    }
    /**
     * @param length the length to set
     */
    public void setLength(String length) {
        this.length = length;
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
     * @return the desc
     */
    public String getDesc() {
        return desc;
    }
    /**
     * @param desc the desc to set
     */
    public void setDesc(String desc) {
        this.desc = desc;
    }
    /**
     * @return the url2
     */
    public String getUrl2() {
        return url2;
    }
    /**
     * @param url2 the url2 to set
     */
    public void setUrl2(String url2) {
        this.url2 = url2;
    }
    
}
