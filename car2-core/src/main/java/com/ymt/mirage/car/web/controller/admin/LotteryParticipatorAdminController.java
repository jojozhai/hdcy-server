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

import com.ymt.mirage.car.dto.LotteryParticipatorInfo;
import com.ymt.mirage.car.service.LotteryParticipatorService;

/**
 * @author lotteryParticipator
 *
 */
@RestController
@Profile("admin")
public class LotteryParticipatorAdminController {

	@Autowired
	private LotteryParticipatorService lotteryParticipatorService;

	@RequestMapping(value = "/lotteryParticipator", method = RequestMethod.POST)
	public LotteryParticipatorInfo create(@RequestBody LotteryParticipatorInfo lotteryParticipatorInfo) {
		return lotteryParticipatorService.create(lotteryParticipatorInfo);
	}

	@RequestMapping(value = "/lotteryParticipator", method = RequestMethod.GET)
	public Page<LotteryParticipatorInfo> query(LotteryParticipatorInfo lotteryParticipatorInfo, Pageable pageable) {
		return lotteryParticipatorService.query(lotteryParticipatorInfo, pageable);
	}
	
	@RequestMapping(value = "/lotteryParticipator/{id}", method = RequestMethod.GET)
	public LotteryParticipatorInfo getInfo(@PathVariable Long id) {
		return lotteryParticipatorService.getInfo(id);
	}

	@RequestMapping(value = "/lotteryParticipator/{id}", method = RequestMethod.PUT)
	public LotteryParticipatorInfo update(@RequestBody LotteryParticipatorInfo lotteryParticipatorInfo) {
		return lotteryParticipatorService.update(lotteryParticipatorInfo);
	}

	@RequestMapping(value = "/lotteryParticipator/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		lotteryParticipatorService.delete(id);
	}
	
	@RequestMapping(value = "lotteryParticipator/{id}/update", method = RequestMethod.PUT)
	public void updateCount(@RequestBody LotteryParticipatorInfo lotteryParticipatorInfo) {
		lotteryParticipatorService.updateCount(lotteryParticipatorInfo);
	}
}
