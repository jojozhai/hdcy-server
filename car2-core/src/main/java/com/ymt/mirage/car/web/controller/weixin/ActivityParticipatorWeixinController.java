/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.ActivityParticipatorInfo;
import com.ymt.mirage.car.service.ActivityParticipatorService;
import com.ymt.mirage.user.dto.UserInfo;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class ActivityParticipatorWeixinController {
	
	@Autowired
	private ActivityParticipatorService activityParticipatorService;

	@RequestMapping(value = "/activityParticipator", method = RequestMethod.GET)
	public Page<ActivityParticipatorInfo> query(ActivityParticipatorInfo participationInfo, Pageable pageable) {
		return activityParticipatorService.query(participationInfo, pageable);
	}
	
	@RequestMapping(value = "/activityParticipator", method = RequestMethod.POST)
	public UserInfo create(@RequestBody ActivityParticipatorInfo participationInfo) {
		participationInfo.setUserId(CurrentUserHolder.getCurrentUserId());
		return activityParticipatorService.create(participationInfo);
	}

}
