/*
 * 项目名称：car2-core
 * 类名称: DataService
 * 创建时间: 2016年7月25日 下午2:46:45
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service;

import java.text.ParseException;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public interface DataService {
    
    void userData() throws ParseException;

    void userData2();

    void articleData();

    void clean();

    void image();

    void count();
}
