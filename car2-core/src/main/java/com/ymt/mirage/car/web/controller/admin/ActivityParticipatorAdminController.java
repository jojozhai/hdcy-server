/**
 * 
 */
package com.ymt.mirage.car.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.ActivityParticipatorInfo;
import com.ymt.mirage.car.service.ActivityParticipatorService;

/**
 * @author activityParticipator
 *
 */
@RestController
@Profile("admin")
public class ActivityParticipatorAdminController {

	@Autowired
	private ActivityParticipatorService activityParticipatorService;

	@RequestMapping(value = "/activityParticipator", method = RequestMethod.GET)
	public Page<ActivityParticipatorInfo> query(ActivityParticipatorInfo activityParticipatorInfo, Pageable pageable) {
		return activityParticipatorService.query(activityParticipatorInfo, pageable);
	}
	

}
