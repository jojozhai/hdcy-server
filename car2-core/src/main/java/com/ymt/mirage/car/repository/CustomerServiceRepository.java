package com.ymt.mirage.car.repository;

import org.springframework.stereotype.Repository;

import com.ymt.mirage.car.domain.CustomerService;
import com.ymt.pz365.data.jpa.repository.PzRepository;

@Repository
public interface CustomerServiceRepository extends PzRepository<CustomerService>{

}
