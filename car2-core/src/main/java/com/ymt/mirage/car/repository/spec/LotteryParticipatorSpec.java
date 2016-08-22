/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.LotteryParticipator;
import com.ymt.mirage.car.dto.LotteryParticipatorInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
public class LotteryParticipatorSpec extends PzSimpleSpecification<LotteryParticipator, LotteryParticipatorInfo> {

	public LotteryParticipatorSpec(LotteryParticipatorInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<LotteryParticipator> queryWraper) {
		addEqualsCondition(queryWraper, "lotteryId", "lottery.id");
		
		addLikeCondition(queryWraper, "userNickname", "user.nickname");
		addLikeCondition(queryWraper, "userRealname", "user.realname");
		addLikeCondition(queryWraper, "userMobile", "user.mobile");
	}

}
