/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Contrary;
import com.ymt.mirage.car.domain.ContraryParticipator;
import com.ymt.mirage.car.dto.ContraryParticipatorInfo;
import com.ymt.mirage.car.repository.ContraryParticipatorRepository;
import com.ymt.mirage.car.repository.ContraryRepository;
import com.ymt.mirage.car.repository.spec.ContraryParticipatorSpec;
import com.ymt.mirage.car.service.ContraryParticipatorService;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;
import com.ymt.pz365.framework.core.exception.PzException;

/**
 * @author zhailiang
 * @since 2016年6月20日
 */
@Service("contraryParticipatorService")
@Transactional
public class ContraryParticipatorServiceImpl implements ContraryParticipatorService {

	@Autowired
	private ContraryParticipatorRepository contraryParticipatorRepository;

	@Autowired
	private ContraryRepository contraryRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public ContraryParticipatorInfo save(ContraryParticipatorInfo contraryparticipatorInfo) {
		ContraryParticipator contraryparticipator = contraryParticipatorRepository.findOne(contraryparticipatorInfo.getId());
		contraryparticipator.setState(!contraryparticipatorInfo.getState());
		contraryParticipatorRepository.save(contraryparticipator);
		return contraryparticipatorInfo;
	}
	
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.ymt.mirage.car.service.ContraryParticipatorService#query(com.ymt.
	 * mirage.car.dto.ContraryParticipatorInfo,
	 * org.springframework.data.domain.Pageable)
	 */
	@Override
	public Map<String, Page<ContraryParticipatorInfo>> query(ContraryParticipatorInfo condition, Pageable pageable) {
		Map<String, Page<ContraryParticipatorInfo>> result = new HashMap<String, Page<ContraryParticipatorInfo>>();

		condition.setRed(true);
		Page<ContraryParticipator> redParticipators = contraryParticipatorRepository
				.findAll(new ContraryParticipatorSpec(condition), pageable);
		result.put("red", QueryResultConverter.convert(redParticipators, pageable,
				new AbstractDomain2InfoConverter<ContraryParticipator, ContraryParticipatorInfo>() {
					@Override
					protected void doConvert(ContraryParticipator domain, ContraryParticipatorInfo info)
							throws Exception {
						info.setUserId(domain.getUser().getId());
						info.setHeadimgurl(domain.getUser().getHeadimgurl());
						info.setNickname(domain.getUser().getNickname());
					}
				}));

		condition.setRed(false);
		Page<ContraryParticipator> blueParticipators = contraryParticipatorRepository
				.findAll(new ContraryParticipatorSpec(condition), pageable);
		result.put("blue", QueryResultConverter.convert(blueParticipators, pageable,
				new AbstractDomain2InfoConverter<ContraryParticipator, ContraryParticipatorInfo>() {
					@Override
					protected void doConvert(ContraryParticipator domain, ContraryParticipatorInfo info)
							throws Exception {
						info.setUserId(domain.getUser().getId());
						info.setHeadimgurl(domain.getUser().getHeadimgurl());
						info.setNickname(domain.getUser().getNickname());
					}
				}));

		return result;
	}
	


    @Override
    public Page<ContraryParticipatorInfo> queryForAdmin(ContraryParticipatorInfo condition, Pageable pageable) {
        return QueryResultConverter.convert(contraryParticipatorRepository.findAll(new ContraryParticipatorSpec(condition), pageable), pageable,
                new AbstractDomain2InfoConverter<ContraryParticipator, ContraryParticipatorInfo>() {
            @Override
            protected void doConvert(ContraryParticipator domain, ContraryParticipatorInfo info)
                    throws Exception {
                info.setUserId(domain.getUser().getId());
                info.setHeadimgurl(domain.getUser().getHeadimgurl());
                info.setNickname(domain.getUser().getNickname());
                info.setCreatedTime(domain.getCreatedTime());
                info.setRealname(domain.getUser().getRealname());
                info.setMobile(domain.getUser().getMobile());
            }
        });
    }


	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.ymt.mirage.car.service.ContraryParticipatorService#create(com.ymt.
	 * mirage.car.dto.ContraryParticipatorInfo)
	 */
	@Override
	public ContraryParticipatorInfo create(ContraryParticipatorInfo info) {

		ContraryParticipator participator = contraryParticipatorRepository
				.findByContraryIdAndUserId(info.getContraryId(), info.getUserId());

		if (participator != null) {
			throw new PzException("您已经投过票了");
		}

		Contrary contrary = contraryRepository.findOne(info.getContraryId());
		User user = userRepository.findOne(info.getUserId());

		participator = new ContraryParticipator();
		participator.setContent(info.getContent());
		if (StringUtils.isBlank(participator.getContent())) {
			participator.setContent("");
		}
		participator.setRed(info.getRed());
		participator.setContrary(contrary);
		participator.setParticipation(contrary);
		participator.setUser(user);

		if (participator.isRed()) {
			contrary.setRedCount(contrary.getRedCount() + 1);
		} else {
			contrary.setBlueCount(contrary.getBlueCount() + 1);
		}
		contraryParticipatorRepository.save(participator);

		contrary.setHot(contrary.getHot() + 1);
		user.setParticipationCount(user.getParticipationCount() + 1);

		info.setId(participator.getId());
		info.setHeadimgurl(participator.getUser().getHeadimgurl());
		return info;
	}

	@Override
	public ContraryParticipatorInfo getInfo(Long id) {
		ContraryParticipator participator = contraryParticipatorRepository.findOne(id);
		ContraryParticipatorInfo info = new ContraryParticipatorInfo();
		info.setContent(participator.getContent());
		info.setContraryId(participator.getContrary().getId());
		info.setContraryImage(participator.getContrary().getImage());
		info.setContraryName(participator.getContrary().getName());
		info.setHeadimgurl(participator.getUser().getHeadimgurl());
		info.setId(id);
		info.setNickname(participator.getUser().getNickname());
		info.setRed(participator.isRed());
		info.setUserId(participator.getUser().getId());
		if (participator.isRed()) {
			info.setIndexNumber(participator.getContrary().getRedCount());
			info.setViewpoint(participator.getContrary().getRed());
		} else {
			info.setIndexNumber(participator.getContrary().getBlueCount());
			info.setViewpoint(participator.getContrary().getBlue());
		}

		return info;
	}



	
}
