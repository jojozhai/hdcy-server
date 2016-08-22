package com.ymt.mirage.car.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ymt.mirage.car.dto.ContraryParticipatorInfo;
import com.ymt.mirage.car.service.ContraryParticipatorService;

@RestController
@Profile("admin")
public class ContraryParticipatorAdminController {
    
	@Autowired
	private ContraryParticipatorService contraryParticipatorService;

	@RequestMapping(value = "/contraryParticipator", method = RequestMethod.GET)
	public Page<ContraryParticipatorInfo> query(ContraryParticipatorInfo contraryParticipatorInfo, Pageable pageable) {
		return contraryParticipatorService.queryForAdmin(contraryParticipatorInfo, pageable);
	}
	
	@RequestMapping(value = "/contraryParticipator/{id}/update", method = RequestMethod.PUT)
	public ContraryParticipatorInfo update(@RequestBody ContraryParticipatorInfo contraryParticipatorInfo) {
		return contraryParticipatorService.save(contraryParticipatorInfo);
	}
}
