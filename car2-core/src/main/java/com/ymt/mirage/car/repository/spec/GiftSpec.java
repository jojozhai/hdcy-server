/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Gift;
import com.ymt.mirage.car.dto.GiftInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月23日
 */
public class GiftSpec extends PzSimpleSpecification<Gift, GiftInfo> {

	public GiftSpec(GiftInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Gift> queryWraper) {
		addLikeCondition(queryWraper, "name");
	}

}
