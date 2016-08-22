/*
 * 项目名称：car2-core
 * 类名称: DataProcessor
 * 创建时间: 2016年7月27日 下午11:55:06
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public interface DataProcessor {

    void import1(int start, int end);
    
    void import2(int start, int end);

    void importArticle(Long id);
    
}
