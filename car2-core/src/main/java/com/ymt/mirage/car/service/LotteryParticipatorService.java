/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.LotteryParticipatorInfo;
import com.ymt.mirage.car.dto.LotteryPermission;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
public interface LotteryParticipatorService {
	
	Page<LotteryParticipatorInfo> query(LotteryParticipatorInfo lotteryParticipatorInfo, Pageable pageable);
	
	LotteryParticipatorInfo create(LotteryParticipatorInfo lotteryParticipatorInfo);

	LotteryParticipatorInfo getInfo(Long id);

	LotteryParticipatorInfo update(LotteryParticipatorInfo lotteryParticipatorInfo);
	
	LotteryParticipatorInfo updateCount(LotteryParticipatorInfo lotteryParticipatorInfo);
	
	void delete(Long id);

	int lottery(Long id, Long userId);
	
	LotteryPermission getLotteryPermission(Long id, Long currentUserId);

}
