package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.KeyWord;
import com.ymt.mirage.car.dto.KeyWordInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

public class KeyWordSpec extends PzSimpleSpecification<KeyWord, KeyWordInfo>{

	public KeyWordSpec(KeyWordInfo condition) {
		super(condition);
		// TODO Auto-generated constructor stub
	}

	@Override
	protected void addCondition(QueryWraper<KeyWord> queryWraper) {
		// TODO Auto-generated method stub
		
	}

}
