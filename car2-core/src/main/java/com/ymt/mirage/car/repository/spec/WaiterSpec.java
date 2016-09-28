package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Waiter;
import com.ymt.mirage.car.dto.WaiterInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

public class WaiterSpec extends PzSimpleSpecification<Waiter, WaiterInfo>{
	
	public WaiterSpec(WaiterInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Waiter> queryWraper) {
	    addLikeCondition(queryWraper, "name");
	}

}
