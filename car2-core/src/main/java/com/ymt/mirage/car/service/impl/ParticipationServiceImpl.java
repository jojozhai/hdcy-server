/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Participation;
import com.ymt.mirage.car.dto.ParticipationInfo;
import com.ymt.mirage.car.repository.ParticipationRepository;
import com.ymt.mirage.car.repository.spec.ParticipationSpec;
import com.ymt.mirage.car.service.ParticipationService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("participationService")
@Transactional
public class ParticipationServiceImpl extends AbstractParticipationService implements ParticipationService {
	
	@Autowired
	private ParticipationRepository participationRepository;
	
	@Override
	public Page<ParticipationInfo> query(ParticipationInfo participationInfo, Pageable pageable) {
		Page<Participation> pageData = participationRepository.findAll(new ParticipationSpec(participationInfo), pageable);
		return QueryResultConverter.convert(pageData, ParticipationInfo.class, pageable);
	}

}
