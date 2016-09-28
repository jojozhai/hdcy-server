package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Waiter;
import com.ymt.mirage.car.dto.WaiterInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

public class CustomerServiceSpec extends PzSimpleSpecification<Waiter, WaiterInfo> {

	public CustomerServiceSpec(WaiterInfo condition) {
		super(condition);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected void addCondition(QueryWraper<Waiter> queryWraper) {
		// TODO Auto-generated method stub

	}

}
