/**
 * 
 */
package com.ymt.mirage.car.repository;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.ContraryParticipator;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface ContraryParticipatorRepository extends PzRepository<ContraryParticipator> {

	ContraryParticipator findByContraryIdAndUserId(Long contraryId, Long userId);

}
