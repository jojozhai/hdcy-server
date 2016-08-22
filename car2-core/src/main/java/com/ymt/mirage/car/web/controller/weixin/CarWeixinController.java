/**
 * 
 */
package com.ymt.mirage.car.web.controller.weixin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.CarInfo;
import com.ymt.mirage.car.service.CarService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile({"weixin", "app"})
public class CarWeixinController {
	
	@Autowired
	private CarService carService;

	@RequestMapping(value = "/car/all", method = RequestMethod.GET)
	public List<CarInfo> query() {
		return carService.findAll();
	}

}
