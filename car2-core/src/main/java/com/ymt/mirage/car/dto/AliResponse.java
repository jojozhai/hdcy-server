/*
 * 项目名称：car2-core
 * 类名称: AliResponse
 * 创建时间: 2017年1月12日 下午2:35:25
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.dto;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public class AliResponse {
    
    private String code;
    
    private AliResponseData data;

    /**
     * @return the code
     */
    public String getCode() {
        return code;
    }

    /**
     * @param code the code to set
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * @return the data
     */
    public AliResponseData getData() {
        return data;
    }

    /**
     * @param data the data to set
     */
    public void setData(AliResponseData data) {
        this.data = data;
    }

    
}
