/**
 * 
 */
package com.ymt.mirage.car.repository;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.Voting;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface VotingRepository extends PzRepository<Voting> {

}
