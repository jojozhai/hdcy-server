/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.ContraryInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface ContraryService {

	Page<ContraryInfo> query(ContraryInfo contraryInfo, Pageable pageable);
	
	ContraryInfo create(ContraryInfo contraryInfo);

	ContraryInfo getInfo(Long id);

	ContraryInfo update(ContraryInfo contraryInfo);

	void delete(Long id);
	
}
