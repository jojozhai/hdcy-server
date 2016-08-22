package com.ymt.mirage.car.web.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ymt.mirage.car.dto.SponsorInfo;
import com.ymt.mirage.car.service.SponsorService;

@RestController
@Profile("admin")
public class SponsorAdminController {
	@Autowired
	private SponsorService sponsorService;

	@RequestMapping(value = "/sponsor", method = RequestMethod.GET)
	public List<SponsorInfo> query() {
		return sponsorService.find();
	}
}
