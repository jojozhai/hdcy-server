/*
 * 项目名称：car2-core
 * 类名称: GemePointSpec
 * 创建时间: 2016年12月18日 下午3:30:56
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.GamePoint;
import com.ymt.mirage.car.dto.GamePointInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public class GamePointSpec extends PzSimpleSpecification<GamePoint, GamePointInfo> {

    public GamePointSpec(GamePointInfo condition) {
        super(condition);
    }

    @Override
    protected void addCondition(QueryWraper<GamePoint> queryWraper) {
        addEqualsCondition(queryWraper, "game");
        addGreaterThanOrEqualCondition(queryWraper, "point");
    }

}
