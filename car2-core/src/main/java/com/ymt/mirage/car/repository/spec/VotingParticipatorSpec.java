/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.VotingParticipator;
import com.ymt.mirage.car.dto.VotingParticipatorInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public class VotingParticipatorSpec extends PzSimpleSpecification<VotingParticipator, VotingParticipatorInfo> {

	public VotingParticipatorSpec(VotingParticipatorInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<VotingParticipator> queryWraper) {
		addEqualsCondition(queryWraper, "votingId", "voting.id");
		addEqualsCondition(queryWraper, "numberi");
		addGreaterThanCondition(queryWraper, "voteCount");
		addLikeCondition(queryWraper, "nickname", "user.nickname");
		addEqualsCondition(queryWraper, "state");
	}

}
