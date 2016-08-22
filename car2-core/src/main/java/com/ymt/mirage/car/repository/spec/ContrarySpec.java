/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Contrary;
import com.ymt.mirage.car.dto.ContraryInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月20日
 */
public class ContrarySpec extends PzSimpleSpecification<Contrary, ContraryInfo> {

	public ContrarySpec(ContraryInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Contrary> queryWraper) {
		addLikeCondition(queryWraper, "name");
	}

}
