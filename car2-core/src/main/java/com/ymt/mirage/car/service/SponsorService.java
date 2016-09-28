package com.ymt.mirage.car.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.SponsorInfo;

public interface SponsorService {
    
    Page<SponsorInfo> query(SponsorInfo sponsorInfo, Pageable pageable);
    
    SponsorInfo create(SponsorInfo sponsorInfo);

    SponsorInfo getInfo(Long id);

    SponsorInfo update(SponsorInfo sponsorInfo);

    void delete(Long id);

	List<SponsorInfo> findAll();

}
