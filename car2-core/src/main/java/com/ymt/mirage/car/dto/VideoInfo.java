/*
 * 项目名称：car2-core
 * 类名称: VideoInfo
 * 创建时间: 2016年9月6日 上午9:40:34
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.Date;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public class VideoInfo {
    
    private Long id;
    /**
     * 视频名称
     */
    private String name;
    /**
     * 视频链接 
     */
    private String url;
    /**
     * 置顶
     */
    private Boolean top;
    /**
     * 发布
     */
    private Boolean enable;
    /**
     * 图片
     */
    private String image;
    /**
     * 观看次数加成
     */
    private Integer viewCountPlus;
    /**
     * 观看次数
     */
    private Integer viewCount;
    /**
     * 是否是直播
     */
    private Boolean live;
    /**
     * 直播是否已开始
     */
    private Boolean start;
    /**
     * 开始时间
     */
    private Date startTime;
    /**
     * 视频时长
     */
    private String length;
    
    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }
    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }
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
    public Integer getViewCountPlus() {
        return viewCountPlus;
    }
    /**
     * @param viewCountPlus the viewCountPlus to set
     */
    public void setViewCountPlus(Integer viewCountPlus) {
        this.viewCountPlus = viewCountPlus;
    }
    /**
     * @return the viewCount
     */
    public Integer getViewCount() {
        return viewCount;
    }
    /**
     * @param viewCount the viewCount to set
     */
    public void setViewCount(Integer viewCount) {
        this.viewCount = viewCount;
    }
    /**
     * @return the live
     */
    public Boolean getLive() {
        return live;
    }
    /**
     * @param live the live to set
     */
    public void setLive(Boolean live) {
        this.live = live;
    }
    /**
     * @return the start
     */
    public Boolean getStart() {
        return start;
    }
    /**
     * @param start the start to set
     */
    public void setStart(Boolean start) {
        this.start = start;
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
    
}
