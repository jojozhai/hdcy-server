/*
 * 项目名称：car2-core
 * 类名称: StatistisAdminController
 * 创建时间: 2017年1月12日 下午3:40:11
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.web.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.DrawPageStatisticsInfo;
import com.ymt.mirage.car.dto.DrawRegionStatisticsInfo;
import com.ymt.mirage.car.service.StatisticsService;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@RestController
@Profile("admin")
public class StatisticsAdminController {
    
    
    @Autowired
    private StatisticsService statisticsService;

    @RequestMapping(value = "/statistics/draw/page", method = RequestMethod.GET)
    public List<DrawPageStatisticsInfo> statisticsByPage(Pageable pageable) {
        return statisticsService.statisticsByPage(pageable);
    }
    
    @RequestMapping(value = "/statistics/draw/page/count", method = RequestMethod.GET)
    public List<Long> countByPage() {
        return statisticsService.countByPage();
    }
    
    @RequestMapping(value = "/statistics/draw/region", method = RequestMethod.GET)
    public List<DrawRegionStatisticsInfo> statisticsByRegion() {
        return statisticsService.statisticsByRegion();
    }

}
