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

import com.ymt.mirage.car.dto.VotingInfo;
import com.ymt.mirage.car.service.VotingService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile("admin")
public class VotingAdminController {
	
	@Autowired
	private VotingService votingService;

	@RequestMapping(value = "/voting", method = RequestMethod.POST)
	public VotingInfo create(@RequestBody VotingInfo votingInfo) {
		return votingService.create(votingInfo);
	}

	@RequestMapping(value = "/voting", method = RequestMethod.GET)
	public Page<VotingInfo> query(VotingInfo votingInfo, Pageable pageable) {
		return votingService.query(votingInfo, pageable);
	}
	
	@RequestMapping(value = "/voting/{id}", method = RequestMethod.GET)
	public VotingInfo getInfo(@PathVariable Long id) {
		return votingService.getInfo(id);
	}

	@RequestMapping(value = "/voting/{id}", method = RequestMethod.PUT)
	public VotingInfo update(@RequestBody VotingInfo votingInfo) {
		return votingService.update(votingInfo);
	}

	@RequestMapping(value = "/voting/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		votingService.delete(id);
	}

}
