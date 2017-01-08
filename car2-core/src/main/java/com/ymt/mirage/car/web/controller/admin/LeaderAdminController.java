/**
 * 
 */
package com.ymt.mirage.car.web.controller.admin;

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

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile("admin")
public class LeaderAdminController {
	
	@Autowired
	private LeaderService leaderService;

	@RequestMapping(value = "/leader", method = RequestMethod.POST)
	public LeaderInfo create(@RequestBody LeaderInfo leaderInfo) {
		return leaderService.create(leaderInfo);
	}

	@RequestMapping(value = "/leader", method = RequestMethod.GET)
	public Page<LeaderInfo> query(LeaderInfo leaderInfo, Pageable pageable) {
		return leaderService.query(leaderInfo, pageable);
	}
	
	@RequestMapping(value = "/leader/{id}", method = RequestMethod.GET)
	public LeaderInfo getInfo(@PathVariable Long id) {
		return leaderService.getInfo(id);
	}

	@RequestMapping(value = "/leader/{id}", method = RequestMethod.PUT)
	public LeaderInfo update(@RequestBody LeaderInfo leaderInfo) {
		return leaderService.update(leaderInfo);
	}

	@RequestMapping(value = "/leader/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		leaderService.delete(id);
	}

}
