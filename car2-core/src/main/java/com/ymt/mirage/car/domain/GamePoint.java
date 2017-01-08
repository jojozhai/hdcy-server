/*
 * 项目名称：car2-core
 * 类名称: GamePoint
 * 创建时间: 2016年12月18日 下午3:27:59
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Entity
public class GamePoint extends DomainImpl {

    private String game;
    
    private Long userId;
    
    private int point;

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
    public int getPoint() {
        return point;
    }

    /**
     * @param point the point to set
     */
    public void setPoint(int point) {
        this.point = point;
    }
    
}
