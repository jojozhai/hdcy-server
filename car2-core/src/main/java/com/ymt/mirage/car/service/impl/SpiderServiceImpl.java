package com.ymt.mirage.car.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.ymt.mirage.car.domain.Spider;
import com.ymt.mirage.car.dto.SpiderInfo;
import com.ymt.mirage.car.repository.SpiderRepository;
import com.ymt.mirage.car.service.SpiderService;

@Service("spiderService")
@Transactional
public class SpiderServiceImpl implements SpiderService {

	@Autowired
	private SpiderRepository spiderRepository;

	@Override
	public void create(SpiderInfo spiderInfo) {
		Spider spider = new Spider();
		BeanUtils.copyProperties(spiderInfo, spider);
		spiderRepository.save(spider);
	}

}
