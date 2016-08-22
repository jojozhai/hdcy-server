/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.LotteryHistory;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
@Repository
public interface LotteryHistoryRepository extends PzRepository<LotteryHistory> {

	Page<LotteryHistory> findByParticipatorIdAndCreatedTimeAfter(Long id, Date todayZeroHour, Pageable pageable);

    List<LotteryHistory> findByParticipatorId(Long id);

}
