/*
 * 项目名称：car2-core
 * 类名称: DrawLotsServiceImpl
 * 创建时间: 2017年1月8日 下午3:43:48
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.ymt.mirage.car.dto.DrawLotsInfo;
import com.ymt.mirage.car.service.DrawLotsService;
import com.ymt.mirage.car.utils.Lot;
import com.ymt.mirage.car.utils.Lots;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@Service("drawLotsService")
@Transactional
public class DrawLotsServiceImpl implements DrawLotsService {
    
    @Autowired
    private Lots lots;
    
    @Autowired
    private UserRepository userRepository;

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.DrawLotsService#draw(com.ymt.mirage.car.dto.DrawLotsInfo)
     */
    @Override
    public String draw(DrawLotsInfo info) {
        
        Assert.notNull(info, "抽签信息不能为空");
        info.check();
        
        User user = userRepository.findOne(info.getUserId());
        user.setRealname(info.getName());
        user.setSex(info.getSex());
        
        Lot lot = lots.draw(info.getSex());
        
        return getImageUrl(lot);
        
    }

    private String getImageUrl(Lot lot) {
        // TODO Auto-generated method stub
        return "";
    }

}
