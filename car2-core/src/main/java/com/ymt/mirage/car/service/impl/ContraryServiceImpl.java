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

import com.ymt.mirage.car.domain.Contrary;
import com.ymt.mirage.car.domain.ParticipationType;
import com.ymt.mirage.car.dto.ContraryInfo;
import com.ymt.mirage.car.repository.ContraryRepository;
import com.ymt.mirage.car.repository.spec.ContrarySpec;
import com.ymt.mirage.car.service.ContraryService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("contraryService")
@Transactional
public class ContraryServiceImpl extends AbstractParticipationService implements ContraryService {
	
	@Autowired
	private ContraryRepository contraryRepository;
	
	@Override
	public Page<ContraryInfo> query(ContraryInfo contraryInfo, Pageable pageable) {
		Page<Contrary> pageData = contraryRepository.findAll(new ContrarySpec(contraryInfo), pageable);
		return QueryResultConverter.convert(pageData, ContraryInfo.class, pageable);
	}

	@Override
	public ContraryInfo create(ContraryInfo contraryInfo) {
		Contrary contrary = new Contrary();
		BeanUtils.copyProperties(contraryInfo, contrary);
		contrary.setType(ParticipationType.CONTRARY);
		contraryInfo.setId(contraryRepository.save(contrary).getId());
		return contraryInfo;
	}

	@Override
	public ContraryInfo getInfo(Long id) {
		Contrary contrary = contraryRepository.findOne(id);
		ContraryInfo info = new ContraryInfo();
		BeanUtils.copyProperties(contrary, info);
		return info;
	}

	@Override
	public ContraryInfo update(ContraryInfo contraryInfo) {
		Contrary contrary = contraryRepository.findOne(contraryInfo.getId());
		BeanUtils.copyProperties(contraryInfo, contrary);
		contrary.setType(ParticipationType.CONTRARY);
		checkFinishOnUpdate(contrary);
		contraryRepository.save(contrary);
		return contraryInfo;
	}

	@Override
	public void delete(Long id) {
		contraryRepository.delete(id);		
	}

}
