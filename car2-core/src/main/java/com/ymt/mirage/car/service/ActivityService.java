/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.ActivityInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface ActivityService {

	Page<ActivityInfo> query(ActivityInfo activityInfo, Pageable pageable);
	
	ActivityInfo create(ActivityInfo activityInfo);

	ActivityInfo getInfo(Long id);

	ActivityInfo update(ActivityInfo activityInfo);

	void delete(Long id);

}
