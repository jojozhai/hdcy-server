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

import com.ymt.mirage.car.dto.CarInfo;
import com.ymt.mirage.car.service.CarService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile("admin")
public class CarAdminController {
	
	@Autowired
	private CarService carService;

	@RequestMapping(value = "/car", method = RequestMethod.POST)
	public CarInfo create(@RequestBody CarInfo carInfo) {
		return carService.create(carInfo);
	}

	@RequestMapping(value = "/car", method = RequestMethod.GET)
	public Page<CarInfo> query(CarInfo carInfo, Pageable pageable) {
		return carService.query(carInfo, pageable);
	}
	
	@RequestMapping(value = "/car/{id}", method = RequestMethod.GET)
	public CarInfo getInfo(@PathVariable Long id) {
		return carService.getInfo(id);
	}

	@RequestMapping(value = "/car/{id}", method = RequestMethod.PUT)
	public CarInfo update(@RequestBody CarInfo carInfo) {
		return carService.update(carInfo);
	}

	@RequestMapping(value = "/car/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		carService.delete(id);
	}

}
