/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Activity;
import com.ymt.mirage.car.dto.ActivityInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class ActivitySpec extends PzSimpleSpecification<Activity, ActivityInfo> {

	public ActivitySpec(ActivityInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Activity> queryWraper) {
		addLikeCondition(queryWraper, "name");
		addEqualsCondition(queryWraper, "finish");
		addEqualsCondition(queryWraper, "top");
	}

}
