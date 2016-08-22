/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.Participator;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface ParticipatorRepository extends PzRepository<Participator> {

    Participator findByParticipationIdAndUserId(Long participationId, Long currentUserId);

    List<Participator> findByUserId(Long id);

}
