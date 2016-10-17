/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Leader;
import com.ymt.mirage.car.dto.LeaderInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月22日
 */
public class LeaderSpec extends PzSimpleSpecification<Leader, LeaderInfo> {

	public LeaderSpec(LeaderInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Leader> queryWraper) {
		addLikeCondition(queryWraper, "nickname", "user.nickname");
		addEqualsCondition(queryWraper, "status");
		addEqualsCondition(queryWraper, "organ");
		addEqualsCondition(queryWraper, "top");
		addEqualsCondition(queryWraper, "enable");
	}

}
