/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.ContraryParticipatorInfo;
import com.ymt.mirage.car.service.ContraryParticipatorService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class ContraryParticipatorWeixinController {
	
	@Autowired
	private ContraryParticipatorService contraryParticipatorService;

	@RequestMapping(value = "/contraryParticipator", method = RequestMethod.GET)
	public Map<String, Page<ContraryParticipatorInfo>> query(ContraryParticipatorInfo participationInfo, Pageable pageable) {
		return contraryParticipatorService.query(participationInfo, pageable);
	}
	
	@RequestMapping(value = "/contraryParticipator/{id}", method = RequestMethod.GET)
	public ContraryParticipatorInfo getInfo(@PathVariable Long id) {
		return contraryParticipatorService.getInfo(id);
	}
	
	@RequestMapping(value = "/contraryParticipator", method = RequestMethod.POST)
	public ContraryParticipatorInfo create(@RequestBody ContraryParticipatorInfo participationInfo) {
		participationInfo.setUserId(CurrentUserHolder.getCurrentUserId());
		return contraryParticipatorService.create(participationInfo);
	}
}
