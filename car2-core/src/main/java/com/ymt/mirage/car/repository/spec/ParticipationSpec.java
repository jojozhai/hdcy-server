/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import org.apache.commons.lang.StringUtils;

import com.ymt.mirage.car.domain.Participation;
import com.ymt.mirage.car.domain.ParticipationType;
import com.ymt.mirage.car.dto.ParticipationInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public class ParticipationSpec extends PzSimpleSpecification<Participation, ParticipationInfo> {

	public ParticipationSpec(ParticipationInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Participation> queryWraper) {
		if(StringUtils.equals("ONLINE", getCondition().getActType())){
		    addNotEqualsConditionToColumn(queryWraper, "type", ParticipationType.ACTIVITY);
		}else if(StringUtils.equals("ACTIVITY", getCondition().getActType())){
		    addEqualsConditionToColumn(queryWraper, "type", ParticipationType.ACTIVITY);
		}
		
		addEqualsCondition(queryWraper, "enable");
	}

}
