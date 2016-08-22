/**
 * 
 */
package com.ymt.mirage.car.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
@Profile("admin")
public class GiftAdminController {
	
	@Autowired
	private GiftService giftService;

	@RequestMapping(value = "/gift", method = RequestMethod.POST)
	public GiftInfo create(@RequestBody GiftInfo giftInfo) {
		return giftService.create(giftInfo);
	}

	@RequestMapping(value = "/gift", method = RequestMethod.GET)
	public Page<GiftInfo> query(GiftInfo giftInfo, Pageable pageable) {
		return giftService.query(giftInfo, pageable);
	}
	
	@RequestMapping(value = "/gift/{id}", method = RequestMethod.GET)
	public GiftInfo getInfo(@PathVariable Long id) {
		return giftService.getInfo(id);
	}

	@RequestMapping(value = "/gift/{id}", method = RequestMethod.PUT)
	public GiftInfo update(@RequestBody GiftInfo giftInfo) {
		return giftService.update(giftInfo);
	}

	@RequestMapping(value = "/gift/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		giftService.delete(id);
	}

}
