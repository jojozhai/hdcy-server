/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.VotePermission;
import com.ymt.mirage.car.dto.VotingParticipatorInfo;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public interface VotingParticipatorService {

	Page<VotingParticipatorInfo> query(VotingParticipatorInfo votingInfo, Pageable pageable);

	VotingParticipatorInfo create(VotingParticipatorInfo votingInfo);

	VotingParticipatorInfo getInfo(Long id);

	void vote(Long votingParticipatorId, Long currentUserId);

	VotePermission getVotePermission(Long id, Long currentUserId);

	long getParticipatorRank(Long id);

	VotingParticipatorInfo getNext(Long id, boolean next);
	
	VotingParticipatorInfo save(VotingParticipatorInfo votingInfo);

}
