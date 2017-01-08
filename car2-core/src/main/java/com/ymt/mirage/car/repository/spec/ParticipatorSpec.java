/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.ParticipationType;
import com.ymt.mirage.car.domain.Participator;
import com.ymt.mirage.car.dto.ParticipatorInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月22日
 */
public class ParticipatorSpec extends PzSimpleSpecification<Participator, ParticipatorInfo> {

	public ParticipatorSpec(ParticipatorInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Participator> queryWraper) {
		addEqualsCondition(queryWraper, "userId", "user.id");
		addEqualsConditionToColumn(queryWraper, "participation.enable", true);
		addEqualsConditionToColumn(queryWraper, "participation.type", ParticipationType.ACTIVITY);
	}

}
