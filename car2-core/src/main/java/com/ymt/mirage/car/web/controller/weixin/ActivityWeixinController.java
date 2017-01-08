/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.ActivityInfo;
import com.ymt.mirage.car.service.ActivityService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class ActivityWeixinController {
	
	@Autowired
	private ActivityService activityService;
	
	@RequestMapping(value = "/activity", method = RequestMethod.GET)
    public Page<ActivityInfo> query(ActivityInfo activityInfo, Pageable pageable) {
        return activityService.query(activityInfo, pageable);
    }

	@RequestMapping(value = "/activity/{id}", method = RequestMethod.GET)
	public ActivityInfo getInfo(@PathVariable Long id) {
		return activityService.getInfo(id);
	}

}
