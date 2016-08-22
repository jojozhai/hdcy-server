/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.util.Date;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Leader;
import com.ymt.mirage.car.domain.LeaderStatus;
import com.ymt.mirage.car.dto.LeaderInfo;
import com.ymt.mirage.car.repository.LeaderRepository;
import com.ymt.mirage.car.repository.spec.LeaderSpec;
import com.ymt.mirage.car.service.LeaderService;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;
import com.ymt.pz365.framework.core.exception.PzException;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("leaderService")
@Transactional
public class LeaderServiceImpl implements LeaderService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private LeaderRepository leaderRepository;
	
	@Override
	public Page<LeaderInfo> query(LeaderInfo leaderInfo, Pageable pageable) {
		Page<Leader> pageData = leaderRepository.findAll(new LeaderSpec(leaderInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable, new AbstractDomain2InfoConverter<Leader, LeaderInfo>() {
			@Override
			protected void doConvert(Leader leader, LeaderInfo info) throws Exception {
				setLeaderInfo(leader, info);
			}
		});
	}

    @Override
    public LeaderInfo createByAdmin(LeaderInfo leaderInfo) {
        
        User user = new User();
        user.setNickname(leaderInfo.getNickname());
        user.setHeadimgurl(leaderInfo.getHeadimgurl());
        
        if(LeaderStatus.APPROVE.equals(leaderInfo.getStatus())){
            user.setVip(true);
        }else{
            user.setVip(false);
        }
        
        userRepository.save(user);
        
        Leader leader = new Leader();
        leader.setApproveDate(new Date());
        leader.setIntro(leaderInfo.getIntro());
        leader.setStatus(leaderInfo.getStatus());
        leader.setTop(leaderInfo.getTop());
        leader.setTopImage(leaderInfo.getTopImage());
        leader.setTopIndex(leaderInfo.getTopIndex());
        leader.setUser(user);
        leaderRepository.save(leader);
        
        return leaderInfo;
    }

	@Override
	public LeaderInfo create(LeaderInfo leaderInfo) {
		List<Leader> applys = leaderRepository.findByUserIdAndStatus(leaderInfo.getUserId(), LeaderStatus.INIT);
		if(CollectionUtils.isNotEmpty(applys)){
			throw new PzException("您的申请在处理中,请耐心等待");
		}
		List<Leader> exist = leaderRepository.findByUserIdAndStatus(leaderInfo.getUserId(), LeaderStatus.APPROVE);
		if(CollectionUtils.isNotEmpty(exist)){
			throw new PzException("您已经是大咖了,请不要重复申请");
		}
		Leader leader = new Leader();
		BeanUtils.copyProperties(leaderInfo, leader);
		leader.setUser(userRepository.getOne(leaderInfo.getUserId()));
		leader.setStatus(LeaderStatus.INIT);
		leaderInfo.setId(leaderRepository.save(leader).getId());
		return leaderInfo;
	}

	@Override
	public LeaderInfo getInfo(Long id) {
		Leader leader = leaderRepository.findOne(id);
		LeaderInfo info = new LeaderInfo();
		BeanUtils.copyProperties(leader, info);
		setLeaderInfo(leader, info);
		return info;
	}

	@Override
	public LeaderInfo update(LeaderInfo leaderInfo) {
		Leader leader = leaderRepository.findOne(leaderInfo.getId());
		User user = leader.getUser();
		user.setNickname(leaderInfo.getNickname());
		user.setHeadimgurl(leaderInfo.getHeadimgurl());
		
		leader.setTop(leaderInfo.getTop());
		leader.setTopImage(leaderInfo.getTopImage());
		leader.setTopIndex(leaderInfo.getTopIndex());
		leader.setIntro(leaderInfo.getIntro());
		leader.setStatus(leaderInfo.getStatus());
		
		if(LeaderStatus.APPROVE.equals(leaderInfo.getStatus())){
		    leader.getUser().setVip(true);
		}else{
		    leader.getUser().setVip(false);
		}
		
		leaderRepository.save(leader);
		return leaderInfo;
	}

	@Override
	public void delete(Long id) {
		leaderRepository.delete(id);		
	}

	private void setLeaderInfo(Leader leader, LeaderInfo info) {
		info.setHeadimgurl(leader.getUser().getHeadimgurl());
		info.setLevel(leader.getUser().getLevel());
		info.setNickname(leader.getUser().getNickname());
		info.setParticipationCount(leader.getUser().getParticipationCount());
		info.setTags(leader.getUser().getTags());
		info.setUserId(leader.getUser().getId());
	}

}
