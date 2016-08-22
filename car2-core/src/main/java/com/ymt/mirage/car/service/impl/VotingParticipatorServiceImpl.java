/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Voter;
import com.ymt.mirage.car.domain.Voting;
import com.ymt.mirage.car.domain.VotingParticipator;
import com.ymt.mirage.car.dto.InfoCompleteType;
import com.ymt.mirage.car.dto.VotePermission;
import com.ymt.mirage.car.dto.VotingParticipatorInfo;
import com.ymt.mirage.car.repository.VoterRepository;
import com.ymt.mirage.car.repository.VotingParticipatorRepository;
import com.ymt.mirage.car.repository.VotingRepository;
import com.ymt.mirage.car.repository.spec.VotingParticipatorSpec;
import com.ymt.mirage.car.service.VotingParticipatorService;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;
import com.ymt.pz365.framework.core.exception.PzException;
import com.ymt.pz365.framework.core.utils.NumberUtils;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
@Service("votingParticipatorService")
@Transactional
public class VotingParticipatorServiceImpl extends AbstractParticipationService implements VotingParticipatorService {

	@Autowired
	private VotingParticipatorRepository votingParticipatorRepository;
	
	@Autowired
	private VotingRepository votingRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private VoterRepository voterRepository;

	/* (non-Javadoc)
	 * @see com.ymt.mirage.car.service.VotingParticipatorService#query(com.ymt.mirage.car.dto.VotingParticipationInfo, org.springframework.data.domain.Pageable)
	 */
	@Override
	public Page<VotingParticipatorInfo> query(VotingParticipatorInfo votingParticipatorInfo, Pageable pageable) {
		Page<VotingParticipator> pageData = votingParticipatorRepository.findAll(new VotingParticipatorSpec(votingParticipatorInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable, new AbstractDomain2InfoConverter<VotingParticipator, VotingParticipatorInfo>() {
			@Override
			protected void doConvert(VotingParticipator domain, VotingParticipatorInfo info) throws Exception {
				info.setUserId(domain.getUser().getId());
				info.setNickname(domain.getUser().getNickname());
				info.setHeadimgurl(domain.getUser().getHeadimgurl());
				info.setVotingId(domain.getVoting().getId());
			}
		});
	}

	@Override
	public VotingParticipatorInfo create(VotingParticipatorInfo participatorInfo) {
		Voting voting = votingRepository.findOne(participatorInfo.getVotingId());
		checkParticipation(voting);
		VotingParticipator participator = votingParticipatorRepository.findByVotingIdAndUserId(participatorInfo.getVotingId(), participatorInfo.getUserId());
		if(participator == null){
			User user = userRepository.findOne(participatorInfo.getUserId());
			participator = new VotingParticipator();
			participator.setImage(participatorInfo.getImage());
			participator.setMessage(participatorInfo.getMessage());
			participator.setVoting(voting);
			participator.setParticipation(voting);
			participator.setUser(user);
			participator.setNumberi(getVotingNumber(voting));
			participator.setNumber(NumberUtils.getZeroPrefixNumber(participator.getNumberi(), 3));
			
			voting.setHot(voting.getHot() + 1);
			user.setParticipationCount(user.getParticipationCount() + 1);
			
			votingParticipatorRepository.save(participator);
			
			participatorInfo.setId(participator.getId());
			participatorInfo.setHeadimgurl(user.getHeadimgurl());
			participatorInfo.setNickname(user.getNickname());
			participatorInfo.setNumber(participator.getNumber());
			return participatorInfo;
		}
		throw new PzException("您已经报过名了");
	}

	private int getVotingNumber(Voting voting) {
		VotingParticipatorInfo condition = new VotingParticipatorInfo();
		condition.setVotingId(voting.getId());
		Long count = votingParticipatorRepository.count(new VotingParticipatorSpec(condition));
		return count.intValue()+1;
	}

	@Override
	public VotingParticipatorInfo getInfo(Long id) {
		VotingParticipator participator = votingParticipatorRepository.findOne(id);
		VotingParticipatorInfo info = new VotingParticipatorInfo();
		BeanUtils.copyProperties(participator, info);
		
		info.setVotingId(participator.getVoting().getId());
		info.setVotingName(participator.getVoting().getName());
		info.setVotingImage(participator.getVoting().getImage());
		
		info.setHeadimgurl(participator.getUser().getHeadimgurl());
		info.setNickname(participator.getUser().getNickname());
		info.setLevel(participator.getUser().getLevel());
		info.setTags(participator.getUser().getTags());
		info.setUserId(participator.getUser().getId());
		return info;
	}

	@Override
	public void vote(Long votingParticipatorId, Long userId) {
		
		VotingParticipator participator = votingParticipatorRepository.findOne(votingParticipatorId);
		checkParticipation(participator.getVoting());
		
		VotePermission permission = getVotePermission(votingParticipatorId, userId);
		if(permission.getVoteCount() == 0){
			throw new PzException("投票失败,超过投票次数限制");
		}
		
		Voter vote = new Voter();
		vote.setParticipator(participator);
		vote.setUser(userRepository.getOne(userId));
		voterRepository.save(vote);
		
		participator.setVoteCount(participator.getVoteCount() + 1);
	}

	@Override
	public VotePermission getVotePermission(Long id, Long userId) {
		User user = userRepository.findOne(userId);
		VotingParticipator participator = votingParticipatorRepository.findOne(id);
		Voting voting = participator.getVoting();
		
		InfoCompleteType infoCompleteType = getInfoCompleteType(user);
		
		int limit = infoCompleteType.getVoteLimit(voting);
		
//		Pageable pageable = new PageRequest(0, limit, new Sort(Direction.DESC, "createdTime"));
//		Date todayZeroHour = new DateTime().withTimeAtStartOfDay().toDate();
//		List<Voter> todayVotes = voterRepository.findByUserIdAndCreatedTimeAfter(userId, todayZeroHour, pageable).getContent();
		
		List<Voter> voters = voterRepository.findByUserId(userId);
		
		if(CollectionUtils.isEmpty(voters)){
			return new VotePermission(infoCompleteType, limit, limit, voting.getVoteLimit2());
		}else{
			return new VotePermission(infoCompleteType, limit - voters.size(), limit, voting.getVoteLimit2());
		}
	}

	private InfoCompleteType getInfoCompleteType(User user) {
		if(StringUtils.isBlank(user.getRealname()) || StringUtils.isBlank(user.getMobile())){
			return InfoCompleteType.NONE;
		}else{
			if(StringUtils.isBlank(user.getHeadimgurl()) || 
					StringUtils.isBlank(user.getNickname()) || 
					StringUtils.isBlank(user.getSex()) || 
					user.getBirthday() == null ||
					StringUtils.isBlank(user.getProvince()) ||
					StringUtils.isBlank(user.getCity())  ||
					StringUtils.isBlank(user.getCar()) || 
					StringUtils.isBlank(user.getTags())){
				return InfoCompleteType.REQUIRED;
			}else{
				return InfoCompleteType.FULL;
			}
		}
	}

	@Override
	public long getParticipatorRank(Long id) {
		VotingParticipator participator = votingParticipatorRepository.findOne(id);
		VotingParticipatorInfo condition = new VotingParticipatorInfo();
		condition.setVotingId(participator.getVoting().getId());
		condition.setVoteCount(participator.getVoteCount());
		return votingParticipatorRepository.count(new VotingParticipatorSpec(condition)) + 1;
	}

	@Override
	public VotingParticipatorInfo getNext(Long id, boolean next) {
		VotingParticipator participator = votingParticipatorRepository.findOne(id);
		Pageable pageable = new PageRequest(0, 1, new Sort(Direction.DESC, "createdTime"));
		Page<VotingParticipator> participators;
		if(next){
			participators = votingParticipatorRepository.findByVotingIdAndNumberiGreaterThan(participator.getVoting().getId(), participator.getNumberi(), pageable);
		}else{
			participators = votingParticipatorRepository.findByVotingIdAndNumberiLessThan(participator.getVoting().getId(), participator.getNumberi(), pageable);
		}
		
		if(CollectionUtils.isNotEmpty(participators.getContent())){
			return getInfo(participators.getContent().get(0).getId());
		}
		
		return null;
	}

	@Override
	public VotingParticipatorInfo save(VotingParticipatorInfo votingInfo) {
		VotingParticipator votingparticipator = votingParticipatorRepository.findOne(votingInfo.getId());
		votingparticipator.setState(!votingInfo.getState());
		votingParticipatorRepository.save(votingparticipator);
		return votingInfo;
	}

}
