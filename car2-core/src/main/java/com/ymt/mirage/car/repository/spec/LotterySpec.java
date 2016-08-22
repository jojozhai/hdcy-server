/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Lottery;
import com.ymt.mirage.car.dto.LotteryInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
public class LotterySpec extends PzSimpleSpecification<Lottery, LotteryInfo> {

	public LotterySpec(LotteryInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Lottery> queryWraper) {
		addLikeCondition(queryWraper, "name");
	}

}
