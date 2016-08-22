package com.ymt.mirage.car.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ymt.mirage.car.dto.VotingParticipatorInfo;
import com.ymt.mirage.car.service.VotingParticipatorService;

@RestController
@Profile("admin")
public class VotingParticipatorAdminController {
	@Autowired
	private VotingParticipatorService votingParticipatorService;

	@RequestMapping(value = "/votingParticipator", method = RequestMethod.GET)
	public Page<VotingParticipatorInfo> query(VotingParticipatorInfo votingParticipatorInfo, Pageable pageable) {
		return votingParticipatorService.query(votingParticipatorInfo, pageable);
	}
	
	@RequestMapping(value = "/votingParticipator/{id}/update", method = RequestMethod.PUT)
	public VotingParticipatorInfo update(@RequestBody VotingParticipatorInfo votingParticipatorInfo) {
		return votingParticipatorService.save(votingParticipatorInfo);
	}
}
