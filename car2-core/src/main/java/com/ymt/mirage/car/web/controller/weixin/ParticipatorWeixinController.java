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
import com.ymt.mirage.car.dto.ParticipatorInfo;
import com.ymt.mirage.car.service.ParticipatorService;
import com.ymt.mirage.user.web.controller.weixin.CurrentUserHolder;
import com.ymt.pz365.framework.core.web.support.SuccessResponse;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class ParticipatorWeixinController {
	
	@Autowired
	private ParticipatorService participatorService;

	@RequestMapping(value = "/participator", method = RequestMethod.GET)
	public Page<ParticipationInfo> queryParticipation(ParticipatorInfo participatorInfo, Pageable pageable) {
		if(participatorInfo.getUserId() == null){
			participatorInfo.setUserId(CurrentUserHolder.getCurrentUserId());
		}
		return participatorService.queryParticipation(participatorInfo, pageable);
	}
	
	@RequestMapping(value = "/participator/member", method = RequestMethod.GET)
    public SuccessResponse isParticipation(Long participationId) {
        return new  SuccessResponse(participatorService.isParticipation(participationId, CurrentUserHolder.getCurrentUserId()));
    }
	
	

}
