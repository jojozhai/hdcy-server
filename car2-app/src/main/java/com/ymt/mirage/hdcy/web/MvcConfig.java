/*
 * 项目名称：car2-weixin-a2
 * 类名称: MvcConfig
 * 创建时间: 2016年9月23日 下午4:18:58
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.hdcy.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }

}
