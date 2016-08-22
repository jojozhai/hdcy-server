/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.joda.time.DateTime;

import com.ymt.mirage.car.domain.Participation;
import com.ymt.pz365.framework.core.exception.PzException;

/**
 * @author zhailiang
 * @since 2016年6月7日
 */
public class AbstractParticipationService {

	protected void checkParticipation(Participation participation) {
		if(new DateTime(participation.getStartTime()).isAfterNow()){
			throw new PzException("活动还未开始");
		}
		if(new DateTime(participation.getEndTime()).isBeforeNow()){
			throw new PzException("活动已经结束");
		}
	}

}
