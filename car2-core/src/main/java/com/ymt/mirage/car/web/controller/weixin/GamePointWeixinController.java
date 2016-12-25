/*
 * 项目名称：car2-core
 * 类名称: GamePointWeixinController
 * 创建时间: 2016年12月18日 下午3:43:22
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.GamePointInfo;
import com.ymt.mirage.car.dto.UserGameRankInfo;
import com.ymt.mirage.car.service.GamePointService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;
import com.ymt.pz365.framework.core.web.support.SuccessResponse;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@RestController
@Profile({"weixin", "app"})
public class GamePointWeixinController {
    
    @Autowired
    private GamePointService gamePointService;

    /**
     * 是否破纪录
     * @param info
     * @return
     * @author zhailiang
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/break", method = RequestMethod.GET)
    public SuccessResponse breakPoint(GamePointInfo info) {
        info.setUserId(CurrentUserHolder.getCurrentUserId());
        return new SuccessResponse(gamePointService.getRank(info));
    }
    
    /**
     * 当前用户排名
     * @param info
     * @return
     * @author zhailiang
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/rank", method = RequestMethod.GET)
    public UserGameRankInfo rank(GamePointInfo info) {
        info.setUserId(CurrentUserHolder.getCurrentUserId());
        return gamePointService.getUserGameRankInfo(info);
    }
    
    /**
     * 所有用户排名
     * @param info
     * @return
     * @author zhailiang
     * @since 2016年12月18日
     */
    @RequestMapping(value = "/game/ranks", method = RequestMethod.GET)
    public Page<UserGameRankInfo> ranks(Pageable pageable) {
        return gamePointService.query(pageable);
    }
}
