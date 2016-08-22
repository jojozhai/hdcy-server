/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.GiftInfo;
import com.ymt.mirage.car.service.GiftService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class GiftWeixinController {
	
	@Autowired
	private GiftService giftService;

	@RequestMapping(value = "/gift", method = RequestMethod.GET)
	public Page<GiftInfo> query(GiftInfo giftInfo, Pageable pageable) {
		return giftService.query(giftInfo, pageable);
	}
	
	@RequestMapping(value = "/gift/{id}", method = RequestMethod.GET)
	public GiftInfo getInfo(@PathVariable Long id) {
		return giftService.getInfo(id);
	}

}
