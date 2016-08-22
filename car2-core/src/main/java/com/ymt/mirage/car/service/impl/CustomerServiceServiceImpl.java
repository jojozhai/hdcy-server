package com.ymt.mirage.car.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.CustomerService;
import com.ymt.mirage.car.dto.CustomerServiceInfo;
import com.ymt.mirage.car.repository.CustomerServiceRepository;
import com.ymt.mirage.car.service.CustomerServiceService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

@Service("customerServiceService")
@Transactional
public class CustomerServiceServiceImpl implements CustomerServiceService {

	@Autowired
	private CustomerServiceRepository customerServiceRepository;

	@Override
	public List<CustomerServiceInfo> find() {
		List<CustomerService> custlist = customerServiceRepository.findAll();
		return QueryResultConverter.convert(custlist, CustomerServiceInfo.class);
	}

}
