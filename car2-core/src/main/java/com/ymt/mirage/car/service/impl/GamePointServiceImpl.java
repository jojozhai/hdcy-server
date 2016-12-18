/*
 * 项目名称：car2-core
 * 类名称: GamePointServiceImpl
 * 创建时间: 2016年12月18日 下午3:34:23
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.GamePoint;
import com.ymt.mirage.car.dto.GamePointInfo;
import com.ymt.mirage.car.repository.GamePointRepository;
import com.ymt.mirage.car.repository.spec.GamePointSpec;
import com.ymt.mirage.car.service.GamePointService;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Service("gamePointService")
@Transactional
public class GamePointServiceImpl implements GamePointService {
    
    @Autowired
    private GamePointRepository gamePointRepository;

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.GamePointService#getRank(com.ymt.mirage.car.dto.GamePointInfo)
     */
    @Override
    public long getRank(GamePointInfo info) {
        
        GamePoint gamePoint = gamePointRepository.findByGameAndUserId(info.getGame(), info.getUserId());
        if(gamePoint == null) {
            gamePoint = new GamePoint();
            gamePoint.setGame(info.getGame());
            gamePoint.setUserId(info.getUserId());
        }
        gamePoint.setPoint(info.getPoint());
        gamePointRepository.save(gamePoint);
        
        return gamePointRepository.count(new GamePointSpec(info));
    }

}
