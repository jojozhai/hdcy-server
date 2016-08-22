/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.ActivityParticipator;
import com.ymt.mirage.car.dto.ActivityParticipatorInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public class ActivityParticipatorSpec extends PzSimpleSpecification<ActivityParticipator, ActivityParticipatorInfo> {

	public ActivityParticipatorSpec(ActivityParticipatorInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<ActivityParticipator> queryWraper) {
		addEqualsCondition(queryWraper, "activityId", "activity.id");
		addLikeCondition(queryWraper, "nickname", "user.nickname");
		addLikeCondition(queryWraper, "realname", "user.realname");
		addLikeCondition(queryWraper, "mobile", "user.mobile");
	}

}
