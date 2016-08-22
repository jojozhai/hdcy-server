/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.Participation;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface ParticipationRepository extends PzRepository<Participation> {

	List<Participation> findByFinish(boolean finish);

}
