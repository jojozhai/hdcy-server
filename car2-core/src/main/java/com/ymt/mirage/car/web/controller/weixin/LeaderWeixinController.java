/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.LeaderInfo;
import com.ymt.mirage.car.service.LeaderService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class LeaderWeixinController {
	
	@Autowired
	private LeaderService leaderService;

	@RequestMapping(value = "/leader", method = RequestMethod.GET)
	public Page<LeaderInfo> query(LeaderInfo condition, Pageable pageable) {
		return leaderService.query(condition, pageable);
	}
	
	@RequestMapping(value = "/leader", method = RequestMethod.POST)
	public void create(@RequestBody LeaderInfo info) {
		info.setUserId(CurrentUserHolder.getCurrentUserId());
		leaderService.apply(info);
	}
	
	@RequestMapping(value = "/leader/{id}", method = RequestMethod.GET)
	public LeaderInfo getInfo(@PathVariable Long id) {
		return leaderService.getInfo(id);
	}

}
