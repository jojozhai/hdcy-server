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

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import com.ymt.mirage.car.dto.DrawLotsInfo;
import com.ymt.mirage.car.service.DrawLotsService;
import com.ymt.mirage.car.utils.Lot;
import com.ymt.mirage.car.utils.Lots;
import com.ymt.mirage.car.web.config.DrawLotsConfigs;
import com.ymt.mirage.car.web.config.DrawLotsQrcodeConfig;
import com.ymt.mirage.car.web.config.DrawLotsTextConfig;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.pz365.framework.core.exception.PzException;

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
    private DrawLotsConfigs config;
    
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
        
        return getImageUrl(lot, info.getName());
        
    }

    /**
     * @param lot
     * @param name
     * @return
     * @author zhailiang
     * @since 2017年1月8日
     */
    private String getImageUrl(Lot lot, String name) {
        
        //背景
        StringBuilder url = new StringBuilder(config.getBackgroudConfig().getUrl());
        //右下角二维码
        url.append(getQrcodeWaterMarker());
        //左上角用户名
        url.append(getTextWaterMarker(name, config.getNameConfig()));
        //内容
        String encode = Base64.encodeBase64URLSafeString(lot.getContent().getBytes());
        if(encode.length() > 64) {
            url.append(getTextWaterMarker(lot.getContent().substring(0, lot.getContent().length()/2), config.getContentConfig()));
            url.append(getTextWaterMarker(lot.getContent().substring(lot.getContent().length()/2, lot.getContent().length()), 
                    config.getContentConfig(), 
                    config.getContentConfig().getX(), 
                    config.getContentConfig().getOffset() - config.getContentConfig().getSize() - 20));
        }else{
            url.append(getTextWaterMarker(lot.getContent(), config.getContentConfig()));
        }
        //签名和拼音
        int start = config.getStart(lot.getNames().size());
        for (int i = 0; i < lot.getNames().size(); i++) {
            int offset = i * (config.getLotNameConfig().getSize() + config.getSpace());
            url.append(getTextWaterMarker(lot.getNames().get(i), config.getLotNameConfig(), start + offset));
            url.append(getTextWaterMarker(lot.getSpells().get(i), config.getLotSpellConfig(), start + offset));
        }
        
        return url.toString();
    }

    private String getTextWaterMarker(String name, DrawLotsTextConfig textConfig, int x, int offset) {
        return "/watermark,"
                + "text_"+base64Encode(name)+","
                + "type_"+textConfig.getType()+","
                + "coler_"+textConfig.getColor()+","
                + "size_"+textConfig.getSize()+","
                + "g_"+textConfig.getPosition()+","
                + "x_"+x+","
                + "y_"+textConfig.getY()+","
                + "voffset_"+offset;
    }

    /**
     * @param name
     * @param textConfig
     * @param x
     * @return
     * @author zhailiang
     * @since 2017年1月8日
     */
    private String getTextWaterMarker(String name, DrawLotsTextConfig textConfig, int x) {
        return getTextWaterMarker(name, textConfig, x, textConfig.getOffset());
    }

    /**
     * @param name
     * @param textConfig
     * @return
     * @author zhailiang
     * @since 2017年1月8日
     */
    private String getTextWaterMarker(String name, DrawLotsTextConfig textConfig) {
        return getTextWaterMarker(name, textConfig, textConfig.getX());
    }

    /**
     * @return
     * @author zhailiang
     * @since 2017年1月8日
     */
    private String getQrcodeWaterMarker() {
        DrawLotsQrcodeConfig qrcodeConfig = config.getQrcodeConfig();
        return "/watermark,"
                + "image_"+Base64.encodeBase64URLSafeString(qrcodeConfig.getName().getBytes())+","
                + "g_se,"
                + "x_"+config.getQrcodeConfig().getX()+","
                + "y_"+config.getQrcodeConfig().getY();
    }

    /**
     * @param qrcode
     * @return
     * @author zhailiang
     * @since 2017年1月8日
     */
    private String base64Encode(String qrcode) {
        String encode = Base64.encodeBase64URLSafeString(qrcode.getBytes());
        if(encode.length() > 64) {
            throw new PzException("内容过长");
        }
        return encode;
    }

}
