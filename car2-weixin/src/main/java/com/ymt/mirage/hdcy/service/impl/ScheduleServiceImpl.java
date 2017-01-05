/**
 * 
 */
package com.ymt.mirage.hdcy.service.impl;

import java.util.Date;
import java.util.List;

import org.joda.time.DateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.article.domain.Article;
import com.ymt.mirage.article.repository.ArticleRepository;
import com.ymt.mirage.car.domain.Participation;
import com.ymt.mirage.car.repository.ParticipationRepository;
import com.ymt.mirage.hdcy.service.ScheduleService;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
@Service("scheduleService")
@Transactional
public class ScheduleServiceImpl implements ScheduleService {
	
	@Autowired
	private ParticipationRepository participationRepository;
	
	@Autowired
    private ArticleRepository articleRepository;
	
	private Logger logger = LoggerFactory.getLogger(getClass());

	@Override
	@Scheduled(cron = "0 */1 * * * *")
	public void participationFinishSchedule() {
		logger.info("检查活动状态");
		List<Participation> participations = participationRepository.findByFinish(false);
		for (Participation participation : participations) {
			if(new DateTime(participation.getEndTime()).isBeforeNow()){
				participation.setFinish(true);
				participationRepository.save(participation);
			}
		}
	}
	
    @Override
    @Scheduled(cron = "0 */1 * * * *")
    public void articleEnableSchedule() {
        logger.info("检查资讯状态");
        List<Article> articles = articleRepository.findByEnableIsFalseAndEnableDateBefore(new Date());
        for (Article article : articles) {
            article.setEnable(true);
            article.setEnabled(true);
            articleRepository.save(article);
        }
    }

}
