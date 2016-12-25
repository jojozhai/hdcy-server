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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.GamePoint;
import com.ymt.mirage.car.dto.GamePointInfo;
import com.ymt.mirage.car.dto.UserGameRankInfo;
import com.ymt.mirage.car.repository.GamePointRepository;
import com.ymt.mirage.car.repository.spec.GamePointSpec;
import com.ymt.mirage.car.service.GamePointService;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

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
    
    @Autowired
    private UserRepository userRepository;

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.GamePointService#getRank(com.ymt.mirage.car.dto.GamePointInfo)
     */
    @Override
    public boolean getRank(GamePointInfo info) {
        
        GamePoint gamePoint = gamePointRepository.findByGameAndUserId(info.getGame(), info.getUserId());
        
        if(gamePoint == null) {
            gamePoint = new GamePoint();
            gamePoint.setGame(info.getGame());
            gamePoint.setPoint(info.getPoint());
            gamePoint.setUserId(info.getUserId());
            gamePointRepository.save(gamePoint);
            return true;
        }else{
            return gamePoint.getPoint() < info.getPoint();
        }
        
    }

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.GamePointService#getUserGameRankInfo(com.ymt.mirage.car.dto.GamePointInfo)
     */
    @Override
    public UserGameRankInfo getUserGameRankInfo(GamePointInfo info) {
        
        GamePoint gamePoint = gamePointRepository.findByGameAndUserId(info.getGame(), info.getUserId());
        
        if(gamePoint == null) {
            return null;
        }
        
        info.setPoint(gamePoint.getPoint());
        long rank = gamePointRepository.count(new GamePointSpec(info));
        
        User user = userRepository.findOne(info.getUserId());
        
        UserGameRankInfo rankInfo = new UserGameRankInfo();
        rankInfo.setHeadimgurl(user.getHeadimgurl());
        rankInfo.setNickname(user.getNickname());
        rankInfo.setPoint(gamePoint.getPoint());
        rankInfo.setRank(rank);
        
        return rankInfo;
    }

    @Override
    public Page<UserGameRankInfo> query(Pageable pageable) {
        
        Page<GamePoint> points = gamePointRepository.findAll(pageable);
        
        return QueryResultConverter.convert(points, pageable, new AbstractDomain2InfoConverter<GamePoint, UserGameRankInfo>() {
            @Override
            protected void doConvert(GamePoint domain, UserGameRankInfo rankInfo) throws Exception {
                User user = userRepository.findOne(domain.getUserId());
                rankInfo.setHeadimgurl(user.getHeadimgurl());
                rankInfo.setNickname(user.getNickname());
                rankInfo.setPoint(domain.getPoint());
            }
        });
    }

}
