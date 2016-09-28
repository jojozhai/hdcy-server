package com.ymt.mirage.car.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.WaiterInfo;

public interface WaiterService {
    
    Page<WaiterInfo> query(WaiterInfo waiterInfo, Pageable pageable);
    
    WaiterInfo create(WaiterInfo waiterInfo);

    WaiterInfo getInfo(Long id);

    WaiterInfo update(WaiterInfo waiterInfo);

    void delete(Long id);

	List<WaiterInfo> findAll();

}
