/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Car;
import com.ymt.mirage.car.dto.CarInfo;
import com.ymt.mirage.car.repository.CarRepository;
import com.ymt.mirage.car.repository.spec.CarSpec;
import com.ymt.mirage.car.service.CarService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Service("carService")
@Transactional
public class CarServiceImpl implements CarService {
	
	@Autowired
	private CarRepository carRepository;
	
	@Override
	public Page<CarInfo> query(CarInfo carInfo, Pageable pageable) {
		Page<Car> pageData = carRepository.findAll(new CarSpec(carInfo), pageable);
		return QueryResultConverter.convert(pageData, CarInfo.class, pageable);
	}

	@Override
	public CarInfo create(CarInfo carInfo) {
		Car car = new Car();
		BeanUtils.copyProperties(carInfo, car);
		carInfo.setId(carRepository.save(car).getId());
		return carInfo;
	}

	@Override
	public CarInfo getInfo(Long id) {
		Car car = carRepository.findOne(id);
		CarInfo info = new CarInfo();
		BeanUtils.copyProperties(car, info);
		return info;
	}

	@Override
	public CarInfo update(CarInfo carInfo) {
		Car car = carRepository.findOne(carInfo.getId());
		BeanUtils.copyProperties(carInfo, car);
		carRepository.save(car);
		return carInfo;
	}

	@Override
	public void delete(Long id) {
		carRepository.delete(id);		
	}

	@Override
	public List<CarInfo> findAll() {
		List<Order> orders = new ArrayList<Order>();
		orders.add(new Order(Direction.ASC, "letter"));
		orders.add(new Order(Direction.ASC, "index"));
		List<Car> cars = carRepository.findAll(new Sort(orders));
		return QueryResultConverter.convert(cars, CarInfo.class);
	}

}
