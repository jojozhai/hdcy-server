/**
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.Activity;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Repository
public interface ActivityRepository extends PzRepository<Activity> {

    List<Activity> findByStartTimeAfter(Date date);

    List<Activity> findByStartTimeBefore(Date date);

}
