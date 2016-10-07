/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.SigntempInfo;
import com.ymt.mirage.car.service.SigntempService;

/**
 * @author zhailiang
 * @since 2016年5月5日
 */
@RestController
@Profile({"weixin","app"})
public class SigntempWeixinController {
	
	@Autowired
	private SigntempService signtempService;

	@RequestMapping(value = "/signtemp", method = RequestMethod.POST)
	public SigntempInfo create(@RequestBody SigntempInfo signtempInfo) {
		return signtempService.create(signtempInfo);
	}

}
