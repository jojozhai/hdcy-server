/*
 * 项目名称：car2-core
 * 类名称: UserGameRankInfo
 * 创建时间: 2016年12月25日 上午10:56:38
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.dto;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public class UserGameRankInfo {
    
    private String nickname;
    
    private String headimgurl;
    
    private Integer point;
    
    private Long rank;

    /**
     * @return the nickname
     */
    public String getNickname() {
        return nickname;
    }

    /**
     * @param nickname the nickname to set
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    /**
     * @return the headimgurl
     */
    public String getHeadimgurl() {
        return headimgurl;
    }

    /**
     * @param headimgurl the headimgurl to set
     */
    public void setHeadimgurl(String headimgurl) {
        this.headimgurl = headimgurl;
    }

    /**
     * @return the point
     */
    public Integer getPoint() {
        return point;
    }

    /**
     * @param point the point to set
     */
    public void setPoint(Integer point) {
        this.point = point;
    }

    /**
     * @return the rank
     */
    public Long getRank() {
        return rank;
    }

    /**
     * @param rank the rank to set
     */
    public void setRank(Long rank) {
        this.rank = rank;
    }
    

}
