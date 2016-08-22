/**
 * 
 */
package com.ymt.mirage.car.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.VotingParticipator;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface VotingParticipatorRepository extends PzRepository<VotingParticipator> {

	VotingParticipator findByVotingIdAndUserId(Long votingId, Long userId);

	Page<VotingParticipator> findByVotingIdAndNumberiGreaterThan(Long id, int numberi, Pageable pageable);

	Page<VotingParticipator> findByVotingIdAndNumberiLessThan(Long id, int numberi, Pageable pageable);

}
