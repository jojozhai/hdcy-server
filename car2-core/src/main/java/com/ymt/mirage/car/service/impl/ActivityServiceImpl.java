/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Activity;
import com.ymt.mirage.car.domain.KeyWord;
import com.ymt.mirage.car.domain.ParticipationType;
import com.ymt.mirage.car.dto.ActivityInfo;
import com.ymt.mirage.car.dto.ActivityParticipatorInfo;
import com.ymt.mirage.car.dto.WaiterInfo;
import com.ymt.mirage.car.repository.ActivityParticipatorRepository;
import com.ymt.mirage.car.repository.ActivityRepository;
import com.ymt.mirage.car.repository.KeyWordRepository;
import com.ymt.mirage.car.repository.SponsorRepository;
import com.ymt.mirage.car.repository.WaiterRepository;
import com.ymt.mirage.car.repository.spec.ActivityParticipatorSpec;
import com.ymt.mirage.car.repository.spec.ActivitySpec;
import com.ymt.mirage.car.service.ActivityService;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("activityService")
@Transactional
public class ActivityServiceImpl extends AbstractParticipationService implements ActivityService {

	@Autowired
	private ActivityRepository activityRepository;
	
	@Autowired
	private ActivityParticipatorRepository activityParticipatorRepository;

	@Autowired
	private WaiterRepository waiterRepository;

	@Autowired
	private SponsorRepository sponsorRepository;

	@Autowired
	private KeyWordRepository keyWordRepository;

	@Override
	public Page<ActivityInfo> query(ActivityInfo activityInfo, Pageable pageable) {
//		Page<Activity> pageData = activityRepository.findAll(new ActivitySpec(activityInfo), pageable);
//		return QueryResultConverter.convert(pageData, ActivityInfo.class, pageable);

		Page<Activity> pageData = activityRepository.findAll(new ActivitySpec(activityInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable,
				new AbstractDomain2InfoConverter<Activity, ActivityInfo>() {
					@Override
					protected void doConvert(Activity domain, ActivityInfo info) throws Exception {
					    if(domain.getSponsor() != null) {
					        info.setSponsorName(domain.getSponsor().getName());
	                        info.setSponsorImage(domain.getSponsor().getImage());
	                        info.setSponsorId(domain.getSponsor().getId());
					    }
					    if(domain.getWaiter() != null) {
					        info.setWaiterId(domain.getWaiter().getId());
					    }
					}
				});
	}

	@Override
	public ActivityInfo create(ActivityInfo activityInfo) {
		Activity activity = new Activity();
//		if (new DateTime(activityInfo.getStartTime()).isBefore(new DateTime(activityInfo.getEndTime()))) {
//			throw new PzException("开始时间不能早于报名截止时间");
//		}
		BeanUtils.copyProperties(activityInfo, activity);
		
		checkFinishOnUpdate(activity);
		activity.setType(ParticipationType.ACTIVITY);
		activity.setSponsor(sponsorRepository.findOne(activityInfo.getSponsorId()));
		activity.setWaiter(waiterRepository.findOne(activityInfo.getWaiterId()));

		List<KeyWord> kwlist = activityInfo.getKwlist();
		for (KeyWord keyWord : kwlist) {
			keyWordRepository.save(keyWord);
		}
		activityInfo.setSponsorName(activity.getSponsor().getName());
		activityInfo.setSponsorImage(activity.getSponsor().getImage());
		activityInfo.setId(activityRepository.save(activity).getId());
		
		WaiterInfo waiterInfo = new WaiterInfo();
		BeanUtils.copyProperties(activity.getWaiter(), waiterInfo);
		activityInfo.setWaiterInfo(waiterInfo);
		
		return activityInfo;
	}

	@Override
	public ActivityInfo getInfo(Long id) {
		Activity activity = activityRepository.findOne(id);
		ActivityInfo info = new ActivityInfo();
		BeanUtils.copyProperties(activity, info);
		activity.setHot(activity.getHot() + 1);
		
		ActivityParticipatorInfo condition = new ActivityParticipatorInfo();
		condition.setActivityId(id);
		info.setSignCount(activityParticipatorRepository.count(new ActivityParticipatorSpec(condition)));
		
		if(activity.getSponsor() != null) {
		    info.setSponsorId(activity.getSponsor().getId());
		    info.setSponsorName(activity.getSponsor().getName());
	        info.setSponsorImage(activity.getSponsor().getImage());
		}
		
		if(activity.getWaiter() != null) {
		    WaiterInfo waiterInfo = new WaiterInfo();
	        BeanUtils.copyProperties(activity.getWaiter(), waiterInfo);
	        info.setWaiterInfo(waiterInfo);
	        info.setWaiterId(activity.getWaiter().getId());
		}
		
		return info;
	}

	@Override
	public ActivityInfo update(ActivityInfo activityInfo) {
		Activity activity = activityRepository.findOne(activityInfo.getId());
		BeanUtils.copyProperties(activityInfo, activity);
		activity.setType(ParticipationType.ACTIVITY);
		checkFinishOnUpdate(activity);
		activity.setWaiter(waiterRepository.findOne(activityInfo.getWaiterId()));
		activity.setSponsor(sponsorRepository.findOne(activityInfo.getSponsorId()));
		activityRepository.save(activity);
		return activityInfo;
	}

	@Override
	public void delete(Long id) {
		activityRepository.delete(id);
	}

}
