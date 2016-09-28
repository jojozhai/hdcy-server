/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.ParticipationType;
import com.ymt.mirage.car.domain.Voting;
import com.ymt.mirage.car.dto.VotingInfo;
import com.ymt.mirage.car.repository.VotingRepository;
import com.ymt.mirage.car.repository.spec.VotingSpec;
import com.ymt.mirage.car.service.VotingService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("votingService")
@Transactional
public class VotingServiceImpl extends AbstractParticipationService implements VotingService {
	
	@Autowired
	private VotingRepository votingRepository;
	
	@Override
	public Page<VotingInfo> query(VotingInfo votingInfo, Pageable pageable) {
		Page<Voting> pageData = votingRepository.findAll(new VotingSpec(votingInfo), pageable);
		return QueryResultConverter.convert(pageData, VotingInfo.class, pageable);
	}

	@Override
	public VotingInfo create(VotingInfo votingInfo) {
		Voting voting = new Voting();
		BeanUtils.copyProperties(votingInfo, voting);
		voting.setType(ParticipationType.VOTING);
		votingInfo.setId(votingRepository.save(voting).getId());
		return votingInfo;
	}

	@Override
	public VotingInfo getInfo(Long id) {
		Voting voting = votingRepository.findOne(id);
		VotingInfo info = new VotingInfo();
		BeanUtils.copyProperties(voting, info);
		voting.setHot(voting.getHot() + 1);
		return info;
	}

	@Override
	public VotingInfo update(VotingInfo votingInfo) {
		Voting voting = votingRepository.findOne(votingInfo.getId());
		BeanUtils.copyProperties(votingInfo, voting);
		voting.setType(ParticipationType.VOTING);
		checkFinishOnUpdate(voting);
		votingRepository.save(voting);
		return votingInfo;
	}

	@Override
	public void delete(Long id) {
		votingRepository.delete(id);		
	}

}
