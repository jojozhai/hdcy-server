/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.LotteryParticipator;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
@Repository
public interface LotteryParticipatorRepository extends PzRepository<LotteryParticipator> {

	LotteryParticipator findByLotteryIdAndUserId(Long lotteryId, Long userId);

	Page<LotteryParticipator> findByUserIdAndCreatedTimeAfter(Long userId, Date todayZeroHour, Pageable pageable);

}
