package com.ymt.mirage.car.web.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.CustomerServiceInfo;
import com.ymt.mirage.car.service.CustomerServiceService;

@RestController
@Profile("admin")
public class CustomerServiceAdminController {
	@Autowired
	private CustomerServiceService customerServiceService;

	@RequestMapping(value = "/customerService", method = RequestMethod.GET)
	public List<CustomerServiceInfo> query() {
		return customerServiceService.find();
	}
}
