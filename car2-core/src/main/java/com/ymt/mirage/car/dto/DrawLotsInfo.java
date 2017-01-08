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

import org.springframework.util.Assert;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public class DrawLotsInfo {
    
    private Long userId;
    
    private String name;
    
    private String sex;
    
    public void check() {
        Assert.hasText(name, "姓名不能为空");
        Assert.hasText(sex, "性别不能为空");
        Assert.notNull(userId, "用户id不能为空");
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
     * @return the sex
     */
    public String getSex() {
        return sex;
    }

    /**
     * @param sex the sex to set
     */
    public void setSex(String sex) {
        this.sex = sex;
    }
    
    
}
