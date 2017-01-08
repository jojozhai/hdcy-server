/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.LeaderInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface LeaderService {

	Page<LeaderInfo> query(LeaderInfo leaderInfo, Pageable pageable);
	
	LeaderInfo create(LeaderInfo leaderInfo);

	LeaderInfo getInfo(Long id);

	LeaderInfo update(LeaderInfo leaderInfo);

	void delete(Long id);

    LeaderInfo apply(LeaderInfo leaderInfo);
	
}
