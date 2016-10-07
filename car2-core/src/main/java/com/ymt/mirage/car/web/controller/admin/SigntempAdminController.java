/**
 * 
 */
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

import com.ymt.mirage.car.dto.SigntempInfo;
import com.ymt.mirage.car.service.SigntempService;

/**
 * @author zhailiang
 * @since 2016年5月5日
 */
@RestController
@Profile("admin")
public class SigntempAdminController {
	
	@Autowired
	private SigntempService signtempService;

	@RequestMapping(value = "/signtemp", method = RequestMethod.POST)
	public SigntempInfo create(@RequestBody SigntempInfo signtempInfo) {
		return signtempService.create(signtempInfo);
	}

	@RequestMapping(value = "/signtemp", method = RequestMethod.GET)
	public Page<SigntempInfo> query(SigntempInfo signtempInfo, Pageable pageable) {
		return signtempService.query(signtempInfo, pageable);
	}
	
	@RequestMapping(value = "/signtemp/{id}", method = RequestMethod.GET)
	public SigntempInfo getInfo(@PathVariable Long id) {
		return signtempService.getInfo(id);
	}

	@RequestMapping(value = "/signtemp/{id}", method = RequestMethod.PUT)
	public SigntempInfo update(@RequestBody SigntempInfo signtempInfo) {
		return signtempService.update(signtempInfo);
	}

	@RequestMapping(value = "/signtemp/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		signtempService.delete(id);
	}
	
}
