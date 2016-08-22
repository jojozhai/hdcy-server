/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.ActivityParticipatorInfo;
import com.ymt.mirage.user.dto.UserInfo;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public interface ActivityParticipatorService {

	Page<ActivityParticipatorInfo> query(ActivityParticipatorInfo participationInfo, Pageable pageable);

	UserInfo create(ActivityParticipatorInfo participationInfo);

}
