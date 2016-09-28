package com.ymt.mirage.car.service.impl;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Sponsor;
import com.ymt.mirage.car.dto.SponsorInfo;
import com.ymt.mirage.car.repository.SponsorRepository;
import com.ymt.mirage.car.repository.spec.SponsorSpec;
import com.ymt.mirage.car.service.SponsorService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

@Service("sponsorService")
@Transactional
public class SponsorServiceImpl implements SponsorService {

	@Autowired
	private SponsorRepository sponsorRepository;
    
    @Override
    public Page<SponsorInfo> query(SponsorInfo sponsorInfo, Pageable pageable) {
        Page<Sponsor> pageData = sponsorRepository.findAll(new SponsorSpec(sponsorInfo), pageable);
        return QueryResultConverter.convert(pageData, SponsorInfo.class, pageable);
    }

    @Override
    public SponsorInfo create(SponsorInfo sponsorInfo) {
        Sponsor sponsor = new Sponsor();
        BeanUtils.copyProperties(sponsorInfo, sponsor);
        sponsorInfo.setId(sponsorRepository.save(sponsor).getId());
        return sponsorInfo;
    }

    @Override
    public SponsorInfo getInfo(Long id) {
        Sponsor sponsor = sponsorRepository.findOne(id);
        SponsorInfo info = new SponsorInfo();
        BeanUtils.copyProperties(sponsor, info);
        return info;
    }

    @Override
    public SponsorInfo update(SponsorInfo sponsorInfo) {
        Sponsor sponsor = sponsorRepository.findOne(sponsorInfo.getId());
        BeanUtils.copyProperties(sponsorInfo, sponsor);
        sponsorRepository.save(sponsor);
        return sponsorInfo;
    }

    @Override
    public void delete(Long id) {
        sponsorRepository.delete(id);       
    }

	@Override
	public List<SponsorInfo> findAll() {
		List<Sponsor> sponlist = sponsorRepository.findAll();
		return QueryResultConverter.convert(sponlist, SponsorInfo.class);
	}
}
