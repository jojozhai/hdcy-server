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

import com.ymt.mirage.car.dto.SponsorInfo;
import com.ymt.mirage.car.service.SponsorService;

@RestController
@Profile("admin")
public class SponsorAdminController {
    
    @Autowired
    private SponsorService sponsorService;

    @RequestMapping(value = "/sponsor", method = RequestMethod.POST)
    public SponsorInfo create(@RequestBody SponsorInfo sponsorInfo) {
        return sponsorService.create(sponsorInfo);
    }

    @RequestMapping(value = "/sponsor", method = RequestMethod.GET)
    public Page<SponsorInfo> query(SponsorInfo sponsorInfo, Pageable pageable) {
        return sponsorService.query(sponsorInfo, pageable);
    }
    
    @RequestMapping(value = "/sponsor/{id}", method = RequestMethod.GET)
    public SponsorInfo getInfo(@PathVariable Long id) {
        return sponsorService.getInfo(id);
    }

    @RequestMapping(value = "/sponsor/{id}", method = RequestMethod.PUT)
    public SponsorInfo update(@RequestBody SponsorInfo sponsorInfo) {
        return sponsorService.update(sponsorInfo);
    }

    @RequestMapping(value = "/sponsor/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        sponsorService.delete(id);
    }
    
    @RequestMapping(value = "/sponsor/all", method = RequestMethod.GET)
    public List<SponsorInfo> findAll() {
        return sponsorService.findAll();
    }
}
