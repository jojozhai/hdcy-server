/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.Leader;
import com.ymt.mirage.car.domain.LeaderStatus;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface LeaderRepository extends PzRepository<Leader> {

	List<Leader> findByUserIdAndStatus(Long userId, LeaderStatus leaderStatus);

    Leader findByName(String name);

}
