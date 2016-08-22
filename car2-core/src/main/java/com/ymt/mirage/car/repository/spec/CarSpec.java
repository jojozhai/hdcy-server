/**
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Car;
import com.ymt.mirage.car.dto.CarInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 * @author zhailiang
 * @since 2016年6月23日
 */
public class CarSpec extends PzSimpleSpecification<Car, CarInfo> {

	public CarSpec(CarInfo condition) {
		super(condition);
	}

	@Override
	protected void addCondition(QueryWraper<Car> queryWraper) {
		addLikeCondition(queryWraper, "name");
	}

}
