/**
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Lottery;
import com.ymt.mirage.car.domain.LotteryHistory;
import com.ymt.mirage.car.domain.LotteryParticipator;
import com.ymt.mirage.car.domain.Prize;
import com.ymt.mirage.car.dto.InfoCompleteType;
import com.ymt.mirage.car.dto.LotteryParticipatorInfo;
import com.ymt.mirage.car.dto.LotteryPermission;
import com.ymt.mirage.car.repository.LotteryHistoryRepository;
import com.ymt.mirage.car.repository.LotteryParticipatorRepository;
import com.ymt.mirage.car.repository.LotteryRepository;
import com.ymt.mirage.car.repository.spec.LotteryParticipatorSpec;
import com.ymt.mirage.car.service.LotteryParticipatorService;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;
import com.ymt.pz365.data.jpa.support.AbstractDomain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;
import com.ymt.pz365.framework.core.exception.PzException;

/**
 * @author zhailiang
 * @since 2016年6月30日
 */
@Service("lotteryParticipatorService")
@Transactional
public class LotteryParticipatorServiceImpl extends AbstractParticipationService implements LotteryParticipatorService {

	@Autowired
	private LotteryRepository lotteryRepository;
	
	@Autowired
	private LotteryHistoryRepository lotteryHistoryRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private LotteryParticipatorRepository lotteryParticipatorRepository;
	
	@Override
	public Page<LotteryParticipatorInfo> query(LotteryParticipatorInfo lotteryParticipatorInfo, Pageable pageable) {
		Page<LotteryParticipator> pageData = lotteryParticipatorRepository.findAll(new LotteryParticipatorSpec(lotteryParticipatorInfo), pageable);
		return QueryResultConverter.convert(pageData, pageable, new AbstractDomain2InfoConverter<LotteryParticipator, LotteryParticipatorInfo>() {
			@Override
			protected void doConvert(LotteryParticipator domain, LotteryParticipatorInfo info) throws Exception {
				setInfoFields(domain, info);
				List<Prize> list=domain.getLottery().getPrizes();
				for (Prize prize : list) {
					if(prize.getName().equals(domain.getPrize())){
						info.setCount(prize.getCount());
					}
				}
			}
		});
	}

	private void setInfoFields(LotteryParticipator domain, LotteryParticipatorInfo info) {
		info.setLotteryId(domain.getLottery().getId());
		info.setUserId(domain.getUser().getId());
		info.setUserNickname(domain.getUser().getNickname());
		info.setUserRealname(domain.getUser().getRealname());
		info.setUserMobile(domain.getUser().getMobile());
	}
	
	@Override
	public LotteryParticipatorInfo create(LotteryParticipatorInfo lotteryParticipatorInfo) {
		
		Lottery lottery = lotteryRepository.getOne(lotteryParticipatorInfo.getLotteryId());
		checkParticipation(lottery);
		
		LotteryParticipator lotteryParticipator = lotteryParticipatorRepository.findByLotteryIdAndUserId(lotteryParticipatorInfo.getLotteryId(), lotteryParticipatorInfo.getUserId());
		if(lotteryParticipator == null) {
			User user = userRepository.getOne(lotteryParticipatorInfo.getUserId());
			lotteryParticipator = new LotteryParticipator();
			lotteryParticipator.setLottery(lottery);
			lotteryParticipator.setParticipation(lottery);
			lotteryParticipator.setUser(user);
			lotteryParticipatorInfo.setId(lotteryParticipatorRepository.save(lotteryParticipator).getId());
			
			lottery.setHot(lottery.getHot() + 1);
			user.setParticipationCount(user.getParticipationCount());
			
			return lotteryParticipatorInfo;
		}else{
			if(lotteryParticipator.isWin()) {
				throw new PzException("您已经抽中过奖品了，请联系微信客户领奖");
			}
		}
		return getInfo(lotteryParticipator.getId());
	}

	@Override
	public LotteryParticipatorInfo getInfo(Long id) {
		LotteryParticipator lotteryParticipator = lotteryParticipatorRepository.findOne(id);
		LotteryParticipatorInfo info = new LotteryParticipatorInfo();
		BeanUtils.copyProperties(lotteryParticipator, info);
		setInfoFields(lotteryParticipator, info);
		return info;
	}

	@Override
	public LotteryParticipatorInfo update(LotteryParticipatorInfo lotteryParticipatorInfo) {
//		LotteryParticipator lotteryParticipator = lotteryParticipatorRepository.findByLotteryIdAndUserId(lotteryParticipatorInfo.getLotteryId(), lotteryParticipatorInfo.getUserId());
		LotteryParticipator lotteryParticipator = lotteryParticipatorRepository.findOne(lotteryParticipatorInfo.getId());
		lotteryParticipator.setPrize(lotteryParticipatorInfo.getPrize());
		lotteryParticipator.setWin(lotteryParticipator.getLottery().isWin(lotteryParticipatorInfo.getPrize()));
		lotteryParticipatorRepository.save(lotteryParticipator);
		
		LotteryHistory history = new LotteryHistory();
		history.setParticipator(lotteryParticipator);
		history.setPrize(lotteryParticipatorInfo.getPrize());
		history.setWin(lotteryParticipator.getLottery().isWin(lotteryParticipatorInfo.getPrize()));
		lotteryHistoryRepository.save(history);
		
		return lotteryParticipatorInfo;
	}

	@Override
	public void delete(Long id) {
		lotteryParticipatorRepository.delete(id);		
	}

	@Override
	public int lottery(Long lotteryId, Long userId) {
	    List<Double> orignalRates = new ArrayList<Double>();
	    Lottery lottery = lotteryRepository.findOne(lotteryId);
	    List<Prize> prizes = lottery.getPrizes();
	    for (Prize prize : prizes) {
            orignalRates.add(new Double(prize.getRate()));
        }
	    
	    int result = lottery(orignalRates);
	    
	    if(prizes.get(result).getCount()<=0 && prizes.get(result).isWin()) {
	        for (int i = 0; i < prizes.size(); i++) {
                if(!prizes.get(i).isWin()){
                    result = i;
                }
            }
	    }
	    
	    if(!prizes.get(result).isWin() && isLastChance(lottery, userId)) {
	        result = lottery.getMostCountWinPrizeIndex();
	    }
	    
		return result;
	}
	
	private boolean isLastChance(Lottery lottery, Long userId) {
	    LotteryParticipator lotteryParticipator = lotteryParticipatorRepository.findByLotteryIdAndUserId(lottery.getId(), userId);
	    if(lotteryParticipator.isWin()) {
	        throw new PzException("您已经中奖了，不能再次抽奖");
	    }
	    List<LotteryHistory> histories = lotteryHistoryRepository.findByParticipatorId(lotteryParticipator.getId());
        return lottery.getLimit() - histories.size() == 1;
    }

    private int lottery(List<Double> orignalRates) {
        if (orignalRates == null || orignalRates.isEmpty()) {
            return -1;
        }

        int size = orignalRates.size();

        // 计算总概率，这样可以保证不一定总概率是1
        double sumRate = 0d;
        for (double rate : orignalRates) {
            sumRate += rate;
        }

        // 计算每个物品在总概率的基础下的概率情况
        List<Double> sortOrignalRates = new ArrayList<Double>(size);
        Double tempSumRate = 0d;
        for (double rate : orignalRates) {
            tempSumRate += rate;
            sortOrignalRates.add(tempSumRate / sumRate);
        }

        // 根据区块值来获取抽取到的物品索引
        double nextDouble = Math.random();
        sortOrignalRates.add(nextDouble);
        Collections.sort(sortOrignalRates);

        return sortOrignalRates.indexOf(nextDouble);
    }

	@Override
	public LotteryPermission getLotteryPermission(Long id, Long userId) {
		
		User user = userRepository.findOne(userId);
		
		Lottery lottery = lotteryRepository.findOne(id);
		InfoCompleteType infoCompleteType = getInfoCompleteType(user);
		int limit = infoCompleteType.getLotteryLimit(lottery);
		
		LotteryParticipator lotteryParticipator = lotteryParticipatorRepository.findByLotteryIdAndUserId(id, userId);
		
		if(lotteryParticipator == null) {
			return new LotteryPermission(infoCompleteType, limit, limit, lottery.getLimit());
		}else{
			
			if(lotteryParticipator.isWin()){
				LotteryPermission permission = new LotteryPermission();
				permission.setWin(true);
				permission.setPrize(lotteryParticipator.getPrize());
				return permission;
			}else{
			    
			    List<LotteryHistory> histories = lotteryHistoryRepository.findByParticipatorId(lotteryParticipator.getId());
			    return new LotteryPermission(infoCompleteType, limit - histories.size(), limit, lottery.getLimit());
			    
			}
			
//			Pageable pageable = new PageRequest(0, limit, new Sort(Direction.DESC, "createdTime"));
//			Date todayZeroHour = new DateTime().withTimeAtStartOfDay().toDate();
//			List<LotteryHistory> todayVotes = lotteryHistoryRepository.findByParticipatorIdAndCreatedTimeAfter(lotteryParticipator.getId(), todayZeroHour, pageable).getContent();

//			if(CollectionUtils.isEmpty(todayVotes)){
//				return new LotteryPermission(infoCompleteType, limit, limit, lottery.getLimit());
//			}else{
//				return new LotteryPermission(infoCompleteType, limit - todayVotes.size(), limit, lottery.getLimit());
//			}
			
		}
		
	}

	private InfoCompleteType getInfoCompleteType(User user) {
		if(StringUtils.isBlank(user.getRealname()) || StringUtils.isBlank(user.getMobile())){
			return InfoCompleteType.NONE;
		}else{
			if(StringUtils.isBlank(user.getHeadimgurl()) || 
					StringUtils.isBlank(user.getNickname()) || 
					StringUtils.isBlank(user.getSex()) || 
					user.getBirthday() == null ||
					StringUtils.isBlank(user.getProvince()) ||
					StringUtils.isBlank(user.getCity())  ||
					StringUtils.isBlank(user.getCar()) || 
					StringUtils.isBlank(user.getTags())){
				return InfoCompleteType.REQUIRED;
			}else{
				return InfoCompleteType.FULL;
			}
		}
	}
	
	@Override
	public LotteryParticipatorInfo updateCount(LotteryParticipatorInfo lotteryParticipatorInfo) {
		LotteryParticipator lotteryparticipator = lotteryParticipatorRepository.findOne(lotteryParticipatorInfo.getId());
		lotteryparticipator.setChange(!lotteryParticipatorInfo.isChange());
		List<Prize> list=lotteryparticipator.getLottery().getPrizes();
		for (Prize prize : list) {
			if(prize.getName().equals(lotteryparticipator.getPrize())){
				if(prize.getCount()>0){
					prize.setCount(prize.getCount()-1);
				}else{
					throw new PzException(""); 
				}
			}
		}
		lotteryParticipatorRepository.save(lotteryparticipator);
		return lotteryParticipatorInfo;
	}
}
