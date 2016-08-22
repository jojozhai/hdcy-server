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

import com.ymt.mirage.car.domain.Gift;
import com.ymt.mirage.car.dto.GiftInfo;
import com.ymt.mirage.car.repository.GiftRepository;
import com.ymt.mirage.car.repository.spec.GiftSpec;
import com.ymt.mirage.car.service.GiftService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("giftService")
@Transactional
public class GiftServiceImpl implements GiftService {
	
	@Autowired
	private GiftRepository giftRepository;
	
	@Override
	public Page<GiftInfo> query(GiftInfo giftInfo, Pageable pageable) {
		Page<Gift> pageData = giftRepository.findAll(new GiftSpec(giftInfo), pageable);
		return QueryResultConverter.convert(pageData, GiftInfo.class, pageable);
	}

	@Override
	public GiftInfo create(GiftInfo giftInfo) {
		Gift gift = new Gift();
		BeanUtils.copyProperties(giftInfo, gift);
		giftInfo.setId(giftRepository.save(gift).getId());
		return giftInfo;
	}

	@Override
	public GiftInfo getInfo(Long id) {
		Gift gift = giftRepository.findOne(id);
		GiftInfo info = new GiftInfo();
		BeanUtils.copyProperties(gift, info);
		return info;
	}

	@Override
	public GiftInfo update(GiftInfo giftInfo) {
		Gift gift = giftRepository.findOne(giftInfo.getId());
		BeanUtils.copyProperties(giftInfo, gift);
		giftRepository.save(gift);
		return giftInfo;
	}

	@Override
	public void delete(Long id) {
		giftRepository.delete(id);		
	}

}
