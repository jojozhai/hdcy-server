/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Voting;
import com.ymt.mirage.car.dto.VotingInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public class VotingSpec extends PzSimpleSpecification<Voting, VotingInfo> {

	public VotingSpec(VotingInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Voting> queryWraper) {
		addLikeCondition(queryWraper, "name");
	}

}
