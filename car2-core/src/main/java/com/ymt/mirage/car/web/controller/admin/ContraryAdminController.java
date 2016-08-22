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

import com.ymt.mirage.car.dto.ContraryInfo;
import com.ymt.mirage.car.service.ContraryService;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@RestController
@Profile("admin")
public class ContraryAdminController {
	
	@Autowired
	private ContraryService contraryService;

	@RequestMapping(value = "/contrary", method = RequestMethod.POST)
	public ContraryInfo create(@RequestBody ContraryInfo contraryInfo) {
		return contraryService.create(contraryInfo);
	}

	@RequestMapping(value = "/contrary", method = RequestMethod.GET)
	public Page<ContraryInfo> query(ContraryInfo contraryInfo, Pageable pageable) {
		return contraryService.query(contraryInfo, pageable);
	}
	
	@RequestMapping(value = "/contrary/{id}", method = RequestMethod.GET)
	public ContraryInfo getInfo(@PathVariable Long id) {
		return contraryService.getInfo(id);
	}

	@RequestMapping(value = "/contrary/{id}", method = RequestMethod.PUT)
	public ContraryInfo update(@RequestBody ContraryInfo contraryInfo) {
		return contraryService.update(contraryInfo);
	}

	@RequestMapping(value = "/contrary/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		contraryService.delete(id);
	}

}
