/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import javax.persistence.criteria.Path;

import com.ymt.mirage.car.domain.ContraryParticipator;
import com.ymt.mirage.car.dto.ContraryParticipatorInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public class ContraryParticipatorSpec extends PzSimpleSpecification<ContraryParticipator, ContraryParticipatorInfo> {

	public ContraryParticipatorSpec(ContraryParticipatorInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<ContraryParticipator> queryWraper) {
		addEqualsCondition(queryWraper, "red", "red");
		addEqualsCondition(queryWraper, "contraryId", "contrary.id");
		addLikeCondition(queryWraper, "nickname", "user.nickname");
		addEqualsCondition(queryWraper, "state");
		
		Path<?> fieldPath = getPath(queryWraper.getRoot(), "content");
        queryWraper.addPredicate(queryWraper.getCb().notEqual(fieldPath, ""));
	}

}
