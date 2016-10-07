/*
 * 项目名称：mirage-lesson
 * 类名称: SigntempServiceImpl
 * 创建时间: 2016年9月19日 上午10:18:05
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Signtemp;
import com.ymt.mirage.car.dto.SigntempInfo;
import com.ymt.mirage.car.repository.SigntempRepository;
import com.ymt.mirage.car.repository.spec.SigntempSpec;
import com.ymt.mirage.car.service.SigntempService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Service("signtempService")
@Transactional
public class SigntempServiceImpl implements SigntempService {
    
    @Autowired
    private SigntempRepository signtempRepository;
    
    @Override
    public Page<SigntempInfo> query(SigntempInfo signtempInfo, Pageable pageable) {
        Page<Signtemp> pageData = signtempRepository.findAll(new SigntempSpec(signtempInfo), pageable);
        return QueryResultConverter.convert(pageData, SigntempInfo.class, pageable);
    }

    @Override
    public SigntempInfo create(SigntempInfo signtempInfo) {
        Signtemp signtemp = new Signtemp();
        BeanUtils.copyProperties(signtempInfo, signtemp);
        signtempInfo.setId(signtempRepository.save(signtemp).getId());
        return signtempInfo;
    }

    @Override
    public SigntempInfo getInfo(Long id) {
        Signtemp signtemp = signtempRepository.findOne(id);
        SigntempInfo info = new SigntempInfo();
        BeanUtils.copyProperties(signtemp, info);
        return info;
    }

    @Override
    public SigntempInfo update(SigntempInfo signtempInfo) {
        Signtemp signtemp = signtempRepository.findOne(signtempInfo.getId());
        BeanUtils.copyProperties(signtempInfo, signtemp);
        signtempRepository.save(signtemp);
        return signtempInfo;
    }

    @Override
    public void delete(Long id) {
        signtempRepository.delete(id);       
    }

}
