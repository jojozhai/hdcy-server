/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.VotingInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface VotingService {

	Page<VotingInfo> query(VotingInfo votingInfo, Pageable pageable);
	
	VotingInfo create(VotingInfo votingInfo);

	VotingInfo getInfo(Long id);

	VotingInfo update(VotingInfo votingInfo);

	void delete(Long id);
	
}
