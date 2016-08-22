/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Activity;
import com.ymt.mirage.car.domain.ActivityParticipator;
import com.ymt.mirage.car.dto.ActivityParticipatorInfo;
import com.ymt.mirage.car.repository.ActivityParticipatorRepository;
import com.ymt.mirage.car.repository.ActivityRepository;
import com.ymt.mirage.car.repository.spec.ActivityParticipatorSpec;
import com.ymt.mirage.car.service.ActivityParticipatorService;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.dto.UserInfo;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.mirage.user.service.UserService;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;
import com.ymt.pz365.framework.core.exception.PzException;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
@Service("activityParticipatorService")
@Transactional
public class ActivityParticipatorServiceImpl extends AbstractParticipationService
		implements ActivityParticipatorService {

	@Autowired
	private ActivityParticipatorRepository activityParticipatorRepository;

	@Autowired
	private ActivityRepository activityRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserService userService;

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.ymt.mirage.car.service.ActivityParticipatorService#query(com.ymt.
	 * mirage.car.dto.ActivityParticipationInfo,
	 * org.springframework.data.domain.Pageable)
	 */
	@Override
	public Page<ActivityParticipatorInfo> query(ActivityParticipatorInfo activityParticipatorInfo, Pageable pageable) {
		Page<ActivityParticipator> pageData = activityParticipatorRepository
				.findAll(new ActivityParticipatorSpec(activityParticipatorInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable,
				new AbstractDomain2InfoConverter<ActivityParticipator, ActivityParticipatorInfo>() {
					@Override
					protected void doConvert(ActivityParticipator domain, ActivityParticipatorInfo info)
							throws Exception {
						info.setRealname(domain.getUser().getRealname());
						info.setNickname(domain.getUser().getNickname());
						info.setMobile(domain.getUser().getMobile());
						info.setMessage(domain.getMessage());
						info.setCreatedTime(domain.getCreatedTime());
					}
				});
	}

	@Override
	public UserInfo create(ActivityParticipatorInfo participatorInfo) {
		Activity activity = activityRepository.getOne(participatorInfo.getActivityId());
		if (new DateTime(activity.getEndTime()).isBeforeNow()) {
			throw new PzException("活动已经结束");
		}
		ActivityParticipator participator = activityParticipatorRepository
				.findByActivityIdAndUserId(participatorInfo.getActivityId(), participatorInfo.getUserId());
		if (participator == null) {
			User user = userRepository.findOne(participatorInfo.getUserId());
			participator = new ActivityParticipator();
			participator.setActivity(activity);
			participator.setParticipation(activity);
			participator.setUser(user);
			participator.setMessage(participatorInfo.getMessage());
			activityParticipatorRepository.save(participator);

			activity.setHot(activity.getHot() + 1);
			user.setParticipationCount(user.getParticipationCount() + 1);
			return userService.getInfo(participatorInfo.getUserId());
		}
		throw new PzException("您已经报过名了");
	}

}
