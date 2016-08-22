/**
 * 
 */
package com.ymt.mirage.car.service;

import java.util.Map;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.ymt.mirage.car.dto.ContraryParticipatorInfo;

/**
 * @author zhailiang
 * @since 2016年6月20日
 */
public interface ContraryParticipatorService {

	Map<String, Page<ContraryParticipatorInfo>> query(ContraryParticipatorInfo participationInfo, Pageable pageable);

	ContraryParticipatorInfo create(ContraryParticipatorInfo participationInfo);

	ContraryParticipatorInfo getInfo(Long id);

    Page<ContraryParticipatorInfo> queryForAdmin(ContraryParticipatorInfo contraryParticipatorInfo, Pageable pageable);
    
    ContraryParticipatorInfo save(ContraryParticipatorInfo activityInfo) ;
}
