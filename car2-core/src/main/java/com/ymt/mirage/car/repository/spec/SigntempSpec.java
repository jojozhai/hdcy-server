/*
 * 项目名称：car2-core
 * 类名称: SigntempSpec
 * 创建时间: 2016年10月7日 下午12:14:41
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Signtemp;
import com.ymt.mirage.car.dto.SigntempInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public class SigntempSpec extends PzSimpleSpecification<Signtemp, SigntempInfo> {

    public SigntempSpec(SigntempInfo condition) {
        super(condition);
    }

    @Override
    protected void addCondition(QueryWraper<Signtemp> queryWraper) {
        addLikeCondition(queryWraper, "name");
    }

}
