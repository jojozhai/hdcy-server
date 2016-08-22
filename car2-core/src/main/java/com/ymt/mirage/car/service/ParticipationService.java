/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.ParticipationInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface ParticipationService {

	Page<ParticipationInfo> query(ParticipationInfo participationInfo, Pageable pageable);
	
}
