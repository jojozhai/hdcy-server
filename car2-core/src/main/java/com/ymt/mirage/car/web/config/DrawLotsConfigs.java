/*
 * 项目名称：car2-core
 * 类名称: WaterMarkerConfig
 * 创建时间: 2017年1月8日 下午9:10:08
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.web.config;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ymt.pz365.framework.param.service.ParamService;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@Component
public class DrawLotsConfigs implements InitializingBean {
    
    @Autowired
    private ParamService paramService;
    
    private DrawLotsBackgroudConfig backgroudConfig;
    
    private DrawLotsQrcodeConfig qrcodeConfig;
    
    private DrawLotsTextConfig nameConfig;
    
    private DrawLotsTextConfig contentConfig;
    
    private DrawLotsTextConfig lotNameConfig;
    
    private DrawLotsTextConfig lotSpellConfig;
    
    private int space;
    
    @Override
    public void afterPropertiesSet() throws Exception {

        backgroudConfig = new DrawLotsBackgroudConfig();
        backgroudConfig.setWidth(new Integer(paramService.getParam("game.draw.lots.image.background.width", "1280").getValue()));
        backgroudConfig.setUrl(paramService.getParam("game.draw.lots.image.background.url", 
                "http://haoduocheyou1.oss-cn-beijing.aliyuncs.com/dlbackgroud.png?x-oss-process=image").getValue());

        qrcodeConfig = new DrawLotsQrcodeConfig();
        qrcodeConfig.setName(paramService.getParam("game.draw.lots.image.qrcode.name", "dlqrcode.png").getValue());
        qrcodeConfig.setX(new Integer(paramService.getParam("game.draw.lots.image.qrcode.x", "10").getValue()));
        qrcodeConfig.setY(new Integer(paramService.getParam("game.draw.lots.image.qrcode.y", "10").getValue()));
        
        nameConfig = new DrawLotsTextConfig();
        nameConfig.setType(paramService.getParam("game.draw.lots.text.name.type", "ZmFuZ3poZW5na2FpdGk").getValue());
        nameConfig.setColor(paramService.getParam("game.draw.lots.text.name.color", "IzAwMDAwMA").getValue());
        nameConfig.setPosition(paramService.getParam("game.draw.lots.text.name.position", "nw").getValue());
        nameConfig.setSize(new Integer(paramService.getParam("game.draw.lots.text.name.size", "40").getValue()));
        nameConfig.setX(new Integer(paramService.getParam("game.draw.lots.text.name.x", "10").getValue()));
        nameConfig.setY(new Integer(paramService.getParam("game.draw.lots.text.name.y", "10").getValue()));
        nameConfig.setOffset(new Integer(paramService.getParam("game.draw.lots.text.name.offset", "0").getValue()));
        
        contentConfig = new DrawLotsTextConfig();
        contentConfig.setType(paramService.getParam("game.draw.lots.text.content.type", "ZmFuZ3poZW5na2FpdGk").getValue());
        contentConfig.setColor(paramService.getParam("game.draw.lots.text.content.color", "IzAwMDAwMA").getValue());
        contentConfig.setPosition(paramService.getParam("game.draw.lots.text.content.position", "center").getValue());
        contentConfig.setSize(new Integer(paramService.getParam("game.draw.lots.text.content.size", "40").getValue()));
        contentConfig.setX(new Integer(paramService.getParam("game.draw.lots.text.content.x", "10").getValue()));
        contentConfig.setY(new Integer(paramService.getParam("game.draw.lots.text.content.y", "10").getValue()));
        contentConfig.setOffset(new Integer(paramService.getParam("game.draw.lots.text.content.offset", "-50").getValue()));
        
        lotNameConfig = new DrawLotsTextConfig();
        lotNameConfig.setType(paramService.getParam("game.draw.lots.text.lot.name.type", "ZmFuZ3poZW5na2FpdGk").getValue());
        lotNameConfig.setColor(paramService.getParam("game.draw.lots.text.lot.name.color", "IzAwMDAwMA").getValue());
        lotNameConfig.setPosition(paramService.getParam("game.draw.lots.text.lot.name.position", "west").getValue());
        lotNameConfig.setSize(new Integer(paramService.getParam("game.draw.lots.text.lot.name.size", "40").getValue()));
        lotNameConfig.setOffset(new Integer(paramService.getParam("game.draw.lots.text.lot.name.offset", "100").getValue()));
        
        lotSpellConfig = new DrawLotsTextConfig();
        lotSpellConfig.setType(paramService.getParam("game.draw.lots.text.lot.spell.type", "ZmFuZ3poZW5na2FpdGk").getValue());
        lotSpellConfig.setColor(paramService.getParam("game.draw.lots.text.lot.spell.color", "IzAwMDAwMA").getValue());
        lotSpellConfig.setPosition(paramService.getParam("game.draw.lots.text.lot.spell.position", "west").getValue());
        lotSpellConfig.setSize(new Integer(paramService.getParam("game.draw.lots.text.lot.spell.size", "40").getValue()));
        lotSpellConfig.setOffset(new Integer(paramService.getParam("game.draw.lots.text.lot.spell.offset", "150").getValue()));
        
        setSpace(new Integer(paramService.getParam("game.draw.lots.lot.name.space", "50").getValue()));
    }
    
    public int getStart(int size) {
        return (getBackgroudConfig().getWidth()
                - (size * getLotNameConfig().getSize())
                - (size - 1 * getSpace()))/2;
    }

    /**
     * @return the paramService
     */
    public ParamService getParamService() {
        return paramService;
    }

    /**
     * @param paramService the paramService to set
     */
    public void setParamService(ParamService paramService) {
        this.paramService = paramService;
    }

    /**
     * @return the backgroudConfig
     */
    public DrawLotsBackgroudConfig getBackgroudConfig() {
        return backgroudConfig;
    }

    /**
     * @param backgroudConfig the backgroudConfig to set
     */
    public void setBackgroudConfig(DrawLotsBackgroudConfig backgroudConfig) {
        this.backgroudConfig = backgroudConfig;
    }

    /**
     * @return the qrcodeConfig
     */
    public DrawLotsQrcodeConfig getQrcodeConfig() {
        return qrcodeConfig;
    }

    /**
     * @param qrcodeConfig the qrcodeConfig to set
     */
    public void setQrcodeConfig(DrawLotsQrcodeConfig qrcodeConfig) {
        this.qrcodeConfig = qrcodeConfig;
    }

    /**
     * @return the nameConfig
     */
    public DrawLotsTextConfig getNameConfig() {
        return nameConfig;
    }

    /**
     * @param nameConfig the nameConfig to set
     */
    public void setNameConfig(DrawLotsTextConfig nameConfig) {
        this.nameConfig = nameConfig;
    }

    /**
     * @return the contentConfig
     */
    public DrawLotsTextConfig getContentConfig() {
        return contentConfig;
    }

    /**
     * @param contentConfig the contentConfig to set
     */
    public void setContentConfig(DrawLotsTextConfig contentConfig) {
        this.contentConfig = contentConfig;
    }

    /**
     * @return the lotNameConfig
     */
    public DrawLotsTextConfig getLotNameConfig() {
        return lotNameConfig;
    }

    /**
     * @param lotNameConfig the lotNameConfig to set
     */
    public void setLotNameConfig(DrawLotsTextConfig lotNameConfig) {
        this.lotNameConfig = lotNameConfig;
    }

    /**
     * @return the lotSpellConfig
     */
    public DrawLotsTextConfig getLotSpellConfig() {
        return lotSpellConfig;
    }

    /**
     * @param lotSpellConfig the lotSpellConfig to set
     */
    public void setLotSpellConfig(DrawLotsTextConfig lotSpellConfig) {
        this.lotSpellConfig = lotSpellConfig;
    }

    /**
     * @return the space
     */
    public int getSpace() {
        return space;
    }

    /**
     * @param space the space to set
     */
    public void setSpace(int space) {
        this.space = space;
    }

    
}
