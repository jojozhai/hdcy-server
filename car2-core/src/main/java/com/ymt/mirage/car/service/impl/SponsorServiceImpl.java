package com.ymt.mirage.car.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Sponsor;
import com.ymt.mirage.car.dto.SponsorInfo;
import com.ymt.mirage.car.repository.SponsorRepository;
import com.ymt.mirage.car.service.SponsorService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

@Service("sponsorService")
@Transactional
public class SponsorServiceImpl implements SponsorService {

	@Autowired
	private SponsorRepository sonsorRepository;

	@Override
	public List<SponsorInfo> find() {
		List<Sponsor> sponlist = sonsorRepository.findAll();
		return QueryResultConverter.convert(sponlist, SponsorInfo.class);
	}
}
