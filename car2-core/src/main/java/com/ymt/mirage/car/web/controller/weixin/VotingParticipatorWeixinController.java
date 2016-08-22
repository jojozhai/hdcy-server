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

import com.ymt.mirage.car.dto.VotePermission;
import com.ymt.mirage.car.dto.VotingParticipatorInfo;
import com.ymt.mirage.car.service.VotingParticipatorService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;
import com.ymt.pz365.framework.core.web.support.SuccessResponse;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class VotingParticipatorWeixinController {
	
	@Autowired
	private VotingParticipatorService votingParticipatorService;

	@RequestMapping(value = "/votingParticipator", method = RequestMethod.GET)
	public Page<VotingParticipatorInfo> query(VotingParticipatorInfo participationInfo, Pageable pageable) {
		return votingParticipatorService.query(participationInfo, pageable);
	}
	
	@RequestMapping(value = "/votingParticipator", method = RequestMethod.POST)
	public VotingParticipatorInfo create(@RequestBody VotingParticipatorInfo participationInfo) {
		participationInfo.setUserId(CurrentUserHolder.getCurrentUserId());
		return votingParticipatorService.create(participationInfo);
	}
	
	@RequestMapping(value = "/votingParticipator/{id}", method = RequestMethod.GET)
	public VotingParticipatorInfo getInfo(@PathVariable Long id) {
		return votingParticipatorService.getInfo(id);
	}
	
	@RequestMapping(value = "/votingParticipator/vote", method = RequestMethod.POST)
	public void vote(@RequestBody VotingParticipatorInfo voteInfo) {
		votingParticipatorService.vote(voteInfo.getId(), CurrentUserHolder.getCurrentUserId());
	}
	
	@RequestMapping(value = "/votingParticipator/{id}/vote", method = RequestMethod.GET)
	public VotePermission getVotePermission(@PathVariable Long id) {
		return votingParticipatorService.getVotePermission(id, CurrentUserHolder.getCurrentUserId());
	}
	
	@RequestMapping(value = "/votingParticipator/{id}/rank", method = RequestMethod.GET)
	public SuccessResponse getParticipatorRank(@PathVariable Long id) {
		return new SuccessResponse(votingParticipatorService.getParticipatorRank(id));
	}
	
	@RequestMapping(value = "/votingParticipator/{id}/next", method = RequestMethod.GET)
	public VotingParticipatorInfo getNext(@PathVariable Long id) {
		return votingParticipatorService.getNext(id, true);
	}
	
	@RequestMapping(value = "/votingParticipator/{id}/prev", method = RequestMethod.GET)
	public VotingParticipatorInfo getPrev(@PathVariable Long id) {
		return votingParticipatorService.getNext(id, false);
	}

}
