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

import com.ymt.mirage.car.domain.Leader;
import com.ymt.mirage.car.domain.LeaderStatus;
import com.ymt.mirage.car.dto.LeaderInfo;
import com.ymt.mirage.car.repository.LeaderRepository;
import com.ymt.mirage.car.repository.spec.LeaderSpec;
import com.ymt.mirage.car.service.LeaderService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("leaderService")
@Transactional
public class LeaderServiceImpl implements LeaderService {
	
    @Autowired
    private LeaderRepository leaderRepository;
    
    @Override
    public Page<LeaderInfo> query(LeaderInfo leaderInfo, Pageable pageable) {
        Page<Leader> pageData = leaderRepository.findAll(new LeaderSpec(leaderInfo), pageable);
        return QueryResultConverter.convert(pageData, LeaderInfo.class, pageable);
    }

    @Override
    public LeaderInfo create(LeaderInfo leaderInfo) {
        Leader leader = new Leader();
        BeanUtils.copyProperties(leaderInfo, leader);
        leader.setStatus(LeaderStatus.APPROVE);
        leaderInfo.setId(leaderRepository.save(leader).getId());
        return leaderInfo;
    }

    @Override
    public LeaderInfo getInfo(Long id) {
        Leader leader = leaderRepository.findOne(id);
        LeaderInfo info = new LeaderInfo();
        BeanUtils.copyProperties(leader, info);
        return info;
    }

    @Override
    public LeaderInfo update(LeaderInfo leaderInfo) {
        Leader leader = leaderRepository.findOne(leaderInfo.getId());
        BeanUtils.copyProperties(leaderInfo, leader);
        leaderRepository.save(leader);
        return leaderInfo;
    }

    @Override
    public void delete(Long id) {
        leaderRepository.delete(id);       
    }

    @Override
    public LeaderInfo apply(LeaderInfo leaderInfo) {
        // TODO Auto-generated method stub
        return null;
    }

}
