/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.GiftInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface GiftService {

	Page<GiftInfo> query(GiftInfo giftInfo, Pageable pageable);
	
	GiftInfo create(GiftInfo giftInfo);

	GiftInfo getInfo(Long id);

	GiftInfo update(GiftInfo giftInfo);

	void delete(Long id);
	
}
