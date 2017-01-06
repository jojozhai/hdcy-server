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
     * 视频连接2
     */
    private String url2;
    /**
     * 置顶
     */
    private Boolean top;
    /**
     * 发布
     */
    private Boolean enable;
    /**
     * 发布日期
     */
    private Date enableDate;
    /**
     * 图片
     */
    private String image;
    /**
     * 直播流id
     */
    private String streamId;
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
     * 直播链接
     */
    private String liveLink;
    /**
     * 直播状态
     */
    private String liveState;
    /**
     * 开始时间
     */
    private Date startTime;
    /**
     * 结束时间
     */
    private Date endTime;
    /**
     * 视频时长
     */
    private String length;
    /**
     * 
     */
    private int commentCount;
    /**
     * 
     */
    private String desc;
    /**
     * 
     */
    private String sponsorName;
    /**
     * 
     */
    private String sponsorImage;
    /**
     * 
     */
    private Long sponsorId;
    /**
     * app直播
     */
    private Boolean liveForApp;
    /**
     * weixin直播
     */
    private Boolean liveForWeixin;
    /**
     * 回放
     */
    private Boolean replay;
    /**
     * 回放直播id
     */
    private Long replayId;
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
     * @return the commentCount
     */
    public int getCommentCount() {
        return commentCount;
    }
    /**
     * @param commentCount the commentCount to set
     */
    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
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
    /**
     * @return the streamId
     */
    public String getStreamId() {
        return streamId;
    }
    /**
     * @param streamId the streamId to set
     */
    public void setStreamId(String streamId) {
        this.streamId = streamId;
    }
    /**
     * @return the liveState
     */
    public String getLiveState() {
        return liveState;
    }
    /**
     * @param liveState the liveState to set
     */
    public void setLiveState(String liveState) {
        this.liveState = liveState;
    }
    /**
     * @return the endTime
     */
    public Date getEndTime() {
        return endTime;
    }
    /**
     * @param endTime the endTime to set
     */
    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }
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
     * @return the sponsorId
     */
    public Long getSponsorId() {
        return sponsorId;
    }
    /**
     * @param sponsorId the sponsorId to set
     */
    public void setSponsorId(Long sponsorId) {
        this.sponsorId = sponsorId;
    }
    /**
     * @return the liveLink
     */
    public String getLiveLink() {
        return liveLink;
    }
    /**
     * @param liveLink the liveLink to set
     */
    public void setLiveLink(String liveLink) {
        this.liveLink = liveLink;
    }
    /**
     * @return the liveForApp
     */
    public Boolean getLiveForApp() {
        return liveForApp;
    }
    /**
     * @param liveForApp the liveForApp to set
     */
    public void setLiveForApp(Boolean liveForApp) {
        this.liveForApp = liveForApp;
    }
    /**
     * @return the liveForWeixin
     */
    public Boolean getLiveForWeixin() {
        return liveForWeixin;
    }
    /**
     * @param liveForWeixin the liveForWeixin to set
     */
    public void setLiveForWeixin(Boolean liveForWeixin) {
        this.liveForWeixin = liveForWeixin;
    }
    /**
     * @return the replay
     */
    public Boolean getReplay() {
        return replay;
    }
    /**
     * @param replay the replay to set
     */
    public void setReplay(Boolean replay) {
        this.replay = replay;
    }
    /**
     * @return the replayId
     */
    public Long getReplayId() {
        return replayId;
    }
    /**
     * @param replayId the replayId to set
     */
    public void setReplayId(Long replayId) {
        this.replayId = replayId;
    }
    
}
