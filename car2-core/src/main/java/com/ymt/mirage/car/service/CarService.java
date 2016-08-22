/**
 * 
 */
package com.ymt.mirage.car.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.CarInfo;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
public interface CarService {

	Page<CarInfo> query(CarInfo carInfo, Pageable pageable);
	
	CarInfo create(CarInfo carInfo);

	CarInfo getInfo(Long id);

	CarInfo update(CarInfo carInfo);

	void delete(Long id);

	List<CarInfo> findAll();
	
}
