/*
 * 项目名称：car2-core
 * 类名称: HdcySecurityRequestConfig
 * 创建时间: 2016年10月18日 上午9:54:47
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.web.config;

import org.springframework.stereotype.Component;

import com.ymt.pz365.framework.core.web.security.SecurityRequestConfigAdapter;

/**
 * 
 * 
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Component
public class HdcySecurityRequestConfig extends SecurityRequestConfigAdapter {

    @Override
    public String[] getPostRequests() {
        return new String[]{"/activityParticipator", "/game/rank"};
    }
    
    @Override
    public String[] getGetRequests() {
        return new String[]{"/participator", "/participator/member"};
    }
}
