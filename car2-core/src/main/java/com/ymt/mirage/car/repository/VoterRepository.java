/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.Voter;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface VoterRepository extends PzRepository<Voter> {

	Page<Voter> findByUserId(Long userId, Pageable pageable);

	Page<Voter> findByUserIdAndCreatedTimeAfter(Long userId, Date date, Pageable pageable);

    List<Voter> findByUserId(Long userId);

    List<Voter> findByUserIdAndParticipatorId(Long userId, Long id);

}
