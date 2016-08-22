/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.LotteryInfo;
import com.ymt.mirage.car.dto.LotteryParticipatorInfo;
import com.ymt.mirage.car.dto.LotteryPermission;
import com.ymt.mirage.car.service.LotteryParticipatorService;
import com.ymt.mirage.car.service.LotteryService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;
import com.ymt.pz365.framework.core.web.support.SuccessResponse;

/**
 * @author lottery
 *
 */
@RestController
@Profile({"weixin", "app"})
public class LotteryWeixinController {

	@Autowired
	private LotteryService lotteryService;
	
	@Autowired
	private LotteryParticipatorService lotteryParticipatorService;
	
	@RequestMapping(value = "/lottery/{id}", method = RequestMethod.GET)
	public LotteryInfo getInfo(@PathVariable Long id) {
		List<String> colors = new ArrayList<String>();
		LotteryInfo info = lotteryService.getInfo(id);
		for (int i = 0; i < info.getPrizes().size(); i++) {
			if(i%2 == 0){
				colors.add("#fe6869");
			}else{
				colors.add("#fe9f9d");
			}
		}
		info.setColors(colors);
		return info;
	}
	
	@RequestMapping(value = "/lottery", method = RequestMethod.POST)
	public LotteryParticipatorInfo create(@RequestBody LotteryParticipatorInfo info) {
		info.setUserId(CurrentUserHolder.getCurrentUserId());
		return lotteryParticipatorService.create(info);
	}
	
	@RequestMapping(value = "/lottery/lottery", method = RequestMethod.POST)
	public SuccessResponse lottery(@RequestBody LotteryParticipatorInfo info) {
		return new SuccessResponse(lotteryParticipatorService.lottery(info.getId(), CurrentUserHolder.getCurrentUserId()));
	}
	
	@RequestMapping(value = "/lottery/{id}", method = RequestMethod.PUT)
	public void update(@RequestBody LotteryParticipatorInfo info) {
		info.setUserId(CurrentUserHolder.getCurrentUserId());
		lotteryParticipatorService.update(info);
	}
	
	@RequestMapping(value = "/lottery/{id}/permission", method = RequestMethod.GET)
	public LotteryPermission getLotteryPermission(@PathVariable Long id) {
		return lotteryParticipatorService.getLotteryPermission(id, CurrentUserHolder.getCurrentUserId());
	}

}
