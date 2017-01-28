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

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.builder.ReflectionToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.DrawLotsInfo;
import com.ymt.mirage.car.service.DrawLotsService;
import com.ymt.mirage.car.service.StatisticsService;
import com.ymt.mirage.car.web.config.DrawLotsConfigs;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;
import com.ymt.pz365.framework.core.web.support.SuccessResponse;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@RestController
@Profile({"weixin", "app"})
public class DrawLotsController {
    
    @Autowired
    private DrawLotsService drawLotsService;
    
    @Autowired
    private StatisticsService statisticsService;
    
    @Autowired
    private DrawLotsConfigs drawLotsConfigs;
    
    private static final Logger LOGGER = LoggerFactory.getLogger(DrawLotsController.class);

    /**
     * 抽签服务
     * @param info
     * @return
     * @author zhailiang
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/draw/lots", method = RequestMethod.GET)
    public SuccessResponse drawLots(DrawLotsInfo info) {
        LOGGER.info(ReflectionToStringBuilder.toString(info));
        info.setUserId(CurrentUserHolder.getCurrentUserId());
        return new SuccessResponse(drawLotsService.draw(info));
    }
    
    /**
     * 刷新配置
     * @param info
     * @return
     * @author zhailiang
     * @throws Exception 
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/draw/lots/flush", method = RequestMethod.GET)
    public void flush(DrawLotsInfo info) throws Exception {
        drawLotsConfigs.afterPropertiesSet();
    }
    
    /**
     * 抽签服务
     * @param info
     * @return
     * @author zhailiang
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/draw/lots/statistics", method = RequestMethod.GET)
    public void statistics(@RequestParam String number, HttpServletRequest request) {
        String ipFromNginx = getHeader(request, "X-Real-IP");  
        System.out.println("ipFromNginx:" + ipFromNginx);  
        System.out.println("getRemoteAddr:" + request.getRemoteAddr());
        statisticsService.count(ipFromNginx, number);
    }
    
    private String getHeader(HttpServletRequest request, String headName) {  
        String value = request.getHeader(headName);  
        return !StringUtils.isBlank(value) && !"unknown".equalsIgnoreCase(value) ? value : "";  
    } 

}
