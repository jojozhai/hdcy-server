package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Spider;
import com.ymt.mirage.car.dto.SpiderInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

public class SpiderSpec extends PzSimpleSpecification<Spider, SpiderInfo> {

	public SpiderSpec(SpiderInfo condition) {
		super(condition);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected void addCondition(QueryWraper<Spider> queryWraper) {
		// TODO Auto-generated method stub

	}

}
