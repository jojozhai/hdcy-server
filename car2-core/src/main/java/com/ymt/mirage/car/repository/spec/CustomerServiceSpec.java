package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.CustomerService;
import com.ymt.mirage.car.dto.CustomerServiceInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

public class CustomerServiceSpec extends PzSimpleSpecification<CustomerService, CustomerServiceInfo> {

	public CustomerServiceSpec(CustomerServiceInfo condition) {
		super(condition);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected void addCondition(QueryWraper<CustomerService> queryWraper) {
		// TODO Auto-generated method stub

	}

}
