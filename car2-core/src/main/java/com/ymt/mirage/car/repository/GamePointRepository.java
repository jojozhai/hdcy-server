/*
 * 项目名称：car2-core
 * 类名称: GamePointRepository
 * 创建时间: 2016年12月18日 下午3:30:21
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.repository;

import com.ymt.mirage.car.domain.GamePoint;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public interface GamePointRepository extends PzRepository<GamePoint> {

    GamePoint findByGameAndUserId(String game, Long userId);

}
