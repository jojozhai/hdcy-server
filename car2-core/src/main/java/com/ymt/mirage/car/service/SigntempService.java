/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.SigntempInfo;

/**
 * @author zhailiang
 * @since 2016年5月5日
 */
public interface SigntempService {

	Page<SigntempInfo> query(SigntempInfo signtempInfo, Pageable pageable);
	
	SigntempInfo create(SigntempInfo signtempInfo);

	SigntempInfo getInfo(Long id);

	SigntempInfo update(SigntempInfo signtempInfo);

	void delete(Long id);

}
