/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.ParticipationInfo;
import com.ymt.mirage.car.service.ParticipationService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class ParticipationWeixinController {
	
	@Autowired
	private ParticipationService participationService;

	@RequestMapping(value = "/participation", method = RequestMethod.GET)
	public Page<ParticipationInfo> query(ParticipationInfo participationInfo, Pageable pageable) {
//		String sortType = StringUtils.isBlank(participationInfo.getSortType())?"time":participationInfo.getSortType();
//		List<Order> orders = new ArrayList<Order>();
//		if(StringUtils.equals(sortType, "time")){
//		    orders.add(new Order(Direction.ASC, "finish"));
//			orders.add(new Order(Direction.ASC, "endTime"));
//			orders.add(new Order(Direction.DESC, "sorthot"));
//		}else{
//			orders.add(new Order(Direction.ASC, "finish"));
//			orders.add(new Order(Direction.DESC, "sorthot"));
//			orders.add(new Order(Direction.ASC, "endTime"));
//		}
//		pageable = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), new Sort(orders));
		return participationService.query(participationInfo, pageable);
	}

}
