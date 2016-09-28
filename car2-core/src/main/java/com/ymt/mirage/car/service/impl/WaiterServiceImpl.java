package com.ymt.mirage.car.service.impl;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Waiter;
import com.ymt.mirage.car.dto.WaiterInfo;
import com.ymt.mirage.car.repository.WaiterRepository;
import com.ymt.mirage.car.repository.spec.WaiterSpec;
import com.ymt.mirage.car.service.WaiterService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

@Service("waiterServiceService")
@Transactional
public class WaiterServiceImpl implements WaiterService {

    @Autowired
    private WaiterRepository waiterRepository;
    
    @Override
    public Page<WaiterInfo> query(WaiterInfo waiterInfo, Pageable pageable) {
        Page<Waiter> pageData = waiterRepository.findAll(new WaiterSpec(waiterInfo), pageable);
        return QueryResultConverter.convert(pageData, WaiterInfo.class, pageable);
    }

    @Override
    public WaiterInfo create(WaiterInfo waiterInfo) {
        Waiter waiter = new Waiter();
        BeanUtils.copyProperties(waiterInfo, waiter);
        waiterInfo.setId(waiterRepository.save(waiter).getId());
        return waiterInfo;
    }

    @Override
    public WaiterInfo getInfo(Long id) {
        Waiter waiter = waiterRepository.findOne(id);
        WaiterInfo info = new WaiterInfo();
        BeanUtils.copyProperties(waiter, info);
        return info;
    }

    @Override
    public WaiterInfo update(WaiterInfo waiterInfo) {
        Waiter waiter = waiterRepository.findOne(waiterInfo.getId());
        BeanUtils.copyProperties(waiterInfo, waiter);
        waiterRepository.save(waiter);
        return waiterInfo;
    }

    @Override
    public void delete(Long id) {
        waiterRepository.delete(id);       
    }

    @Override
    public List<WaiterInfo> findAll() {
        List<Waiter> sponlist = waiterRepository.findAll();
        return QueryResultConverter.convert(sponlist, WaiterInfo.class);
    }
    
}
