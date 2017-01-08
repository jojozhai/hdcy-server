/*
 * 项目名称：car2-core
 * 类名称: DrawLotsController
 * 创建时间: 2017年1月8日 下午3:39:40
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.DrawLotsInfo;
import com.ymt.mirage.car.service.DrawLotsService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;
import com.ymt.pz365.framework.core.web.support.SuccessResponse;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@RestController
public class DrawLotsController {
    
    @Autowired
    private DrawLotsService drawLotsService;

    /**
     * 是否破纪录
     * @param info
     * @return
     * @author zhailiang
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/draw/lots", method = RequestMethod.GET)
    public SuccessResponse drawLots(DrawLotsInfo info) {
        info.setUserId(CurrentUserHolder.getCurrentUserId());
        return new SuccessResponse(drawLotsService.draw(info));
    }

}
