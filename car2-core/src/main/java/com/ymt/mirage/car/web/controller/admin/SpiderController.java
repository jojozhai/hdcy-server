package com.ymt.mirage.car.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ymt.mirage.car.dto.SpiderInfo;
import com.ymt.mirage.car.service.SpiderService;

@RestController
@Profile("admin")
public class SpiderController {
	@Autowired
	private SpiderService spiderService;

	@RequestMapping(value = "/addspider", method = RequestMethod.POST)
	public void create(@RequestBody SpiderInfo spiderInfo) {
		spiderService.create(spiderInfo);
	}
}
