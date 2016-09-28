package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Sponsor;
import com.ymt.mirage.car.dto.SponsorInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

public class SponsorSpec extends PzSimpleSpecification<Sponsor, SponsorInfo>{
	
	public SponsorSpec(SponsorInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Sponsor> queryWraper) {
	    addLikeCondition(queryWraper, "name");
	}

}
