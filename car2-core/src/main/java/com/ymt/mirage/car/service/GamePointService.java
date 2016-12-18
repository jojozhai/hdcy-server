/*
 * 项目名称：car2-core
 * 类名称: GamePointService
 * 创建时间: 2016年12月18日 下午3:33:41
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service;

import com.ymt.mirage.car.dto.GamePointInfo;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public interface GamePointService {
    
    long getRank(GamePointInfo info);

}
