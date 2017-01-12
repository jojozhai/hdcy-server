/*
 * 项目名称：car2-core
 * 类名称: StatisticsService
 * 创建时间: 2017年1月12日 下午2:21:21
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.DrawPageStatisticsInfo;
import com.ymt.mirage.car.dto.DrawRegionStatisticsInfo;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public interface StatisticsService {
    
    void count(String ip, String number);

    List<DrawPageStatisticsInfo> statisticsByPage(Pageable pageable);

    List<Long> countByPage();

    List<DrawRegionStatisticsInfo> statisticsByRegion();

}
