package com.ymt.mirage.car.web.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.WaiterInfo;
import com.ymt.mirage.car.service.WaiterService;

@RestController
@Profile("admin")
public class WaiterAdminController {
    
    @Autowired
    private WaiterService waiterService;

    @RequestMapping(value = "/waiter", method = RequestMethod.POST)
    public WaiterInfo create(@RequestBody WaiterInfo waiterInfo) {
        return waiterService.create(waiterInfo);
    }

    @RequestMapping(value = "/waiter", method = RequestMethod.GET)
    public Page<WaiterInfo> query(WaiterInfo waiterInfo, Pageable pageable) {
        return waiterService.query(waiterInfo, pageable);
    }
    
    @RequestMapping(value = "/waiter/{id}", method = RequestMethod.GET)
    public WaiterInfo getInfo(@PathVariable Long id) {
        return waiterService.getInfo(id);
    }

    @RequestMapping(value = "/waiter/{id}", method = RequestMethod.PUT)
    public WaiterInfo update(@RequestBody WaiterInfo waiterInfo) {
        return waiterService.update(waiterInfo);
    }

    @RequestMapping(value = "/waiter/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        waiterService.delete(id);
    }
    
    @RequestMapping(value = "/waiter/all", method = RequestMethod.GET)
    public List<WaiterInfo> findAll() {
        return waiterService.findAll();
    }
}
