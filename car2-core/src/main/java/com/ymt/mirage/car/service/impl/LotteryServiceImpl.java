/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Lottery;
import com.ymt.mirage.car.domain.ParticipationType;
import com.ymt.mirage.car.dto.LotteryInfo;
import com.ymt.mirage.car.repository.LotteryRepository;
import com.ymt.mirage.car.repository.spec.LotterySpec;
import com.ymt.mirage.car.service.LotteryService;
import com.ymt.mirage.car.service.WaiterService;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
@Service("lotteryService")
@Transactional
public class LotteryServiceImpl extends AbstractParticipationService implements LotteryService {

	@Autowired
	private LotteryRepository lotteryRepository;
	
	@Autowired
	private WaiterService waiterService;
	
	@Override
	public Page<LotteryInfo> query(LotteryInfo lotteryInfo, Pageable pageable) {
		Page<Lottery> pageData = lotteryRepository.findAll(new LotterySpec(lotteryInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable, new AbstractDomain2InfoConverter<Lottery, LotteryInfo>() {
            @Override
            protected void doConvert(Lottery domain, LotteryInfo info) throws Exception {
                info.setWaiterId(domain.getWaiter().getId());
            }
        });
	}

	@Override
	public LotteryInfo create(LotteryInfo lotteryInfo) {
		Lottery lottery = new Lottery();
		BeanUtils.copyProperties(lotteryInfo, lottery);
		lottery.setType(ParticipationType.LOTTERY);
		lottery.setWaiter(waiterRepository.getOne(lotteryInfo.getWaiterId()));
		lotteryInfo.setId(lotteryRepository.save(lottery).getId());
		return lotteryInfo;
	}

	@Override
	public LotteryInfo getInfo(Long id) {
		Lottery lottery = lotteryRepository.findOne(id);
		LotteryInfo info = new LotteryInfo();
		BeanUtils.copyProperties(lottery, info);
		info.setWaiterInfo(waiterService.getInfo(lottery.getWaiter().getId()));
		info.setWaiterId(lottery.getWaiter().getId());
		lottery.setHot(lottery.getHot() + 1);
		return info;
	}
	

	@Override
	public LotteryInfo update(LotteryInfo lotteryInfo) {
		Lottery lottery = lotteryRepository.findOne(lotteryInfo.getId());
		BeanUtils.copyProperties(lotteryInfo, lottery);
		lottery.setType(ParticipationType.LOTTERY);
		checkFinishOnUpdate(lottery);
		lottery.setWaiter(waiterRepository.getOne(lotteryInfo.getWaiterId()));
		lotteryRepository.save(lottery);
		return lotteryInfo;
	}

	@Override
	public void delete(Long id) {
		lotteryRepository.delete(id);		
	}

}
