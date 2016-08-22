/*
 * 项目名称：car2-core
 * 类名称: DataController
 * 创建时间: 2016年7月25日 下午2:46:07
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.service.DataService;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@RestController
@Profile({"xxx"})
public class DataController {
    
    @Autowired
    private DataService dataService;
    
    @RequestMapping("/data/user")
    public void userDate() throws Exception {
//        dataService.userData();
//        dataService.userData2();
//        dataService.articleData();
//        dataService.clean();
//        dataService.image();
//        dataService.count();
    }

}
