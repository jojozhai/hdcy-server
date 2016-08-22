/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.ParticipationInfo;
import com.ymt.mirage.car.dto.ParticipatorInfo;

/**
 * @author zhailiang
 * @since 2016年6月22日
 */
public interface ParticipatorService {

	Page<ParticipationInfo> queryParticipation(ParticipatorInfo participatorInfo, Pageable pageable);

    boolean isParticipation(Long participationId, Long currentUserId);

}
