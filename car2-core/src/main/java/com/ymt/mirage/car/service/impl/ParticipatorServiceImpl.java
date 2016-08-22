/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Participator;
import com.ymt.mirage.car.dto.ParticipationInfo;
import com.ymt.mirage.car.dto.ParticipatorInfo;
import com.ymt.mirage.car.repository.ParticipatorRepository;
import com.ymt.mirage.car.repository.spec.ParticipatorSpec;
import com.ymt.mirage.car.service.ParticipatorService;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("participatorService")
@Transactional
public class ParticipatorServiceImpl implements ParticipatorService {
	
	@Autowired
	private ParticipatorRepository participatorRepository;

	@Override
	public Page<ParticipationInfo> queryParticipation(ParticipatorInfo participatorInfo, Pageable pageable) {
		Page<Participator> pageData = participatorRepository.findAll(new ParticipatorSpec(participatorInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable, new AbstractDomain2InfoConverter<Participator, ParticipationInfo>() {
			@Override
			protected void doConvert(Participator domain, ParticipationInfo info) throws Exception {
				BeanUtils.copyProperties(domain.getParticipation(), info);
			}
		});
	}

    @Override
    public boolean isParticipation(Long participationId, Long currentUserId) {
        Participator participator = participatorRepository.findByParticipationIdAndUserId(participationId, currentUserId);
        return participator != null;
    }
	
	

}
