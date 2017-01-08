/*
 * 项目名称：car2-core
 * 类名称: GamePointInfo
 * 创建时间: 2016年12月18日 下午3:29:28
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
 * @version 1.0.0
 */
public class GamePointInfo {
    
    private String game;
    
    private Long userId;
    
    private Integer point;

    /**
     * @return the game
     */
    public String getGame() {
        return game;
    }

    /**
     * @param game the game to set
     */
    public void setGame(String game) {
        this.game = game;
    }

    /**
     * @return the userId
     */
    public Long getUserId() {
        return userId;
    }

    /**
     * @param userId the userId to set
     */
    public void setUserId(Long userId) {
        this.userId = userId;
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
    
}
