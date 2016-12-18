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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.article.domain.Article;
import com.ymt.mirage.article.repository.ArticleRepository;
import com.ymt.mirage.car.domain.Activity;
import com.ymt.mirage.car.domain.ActivityParticipator;
import com.ymt.mirage.car.domain.Participation;
import com.ymt.mirage.car.repository.ActivityParticipatorRepository;
import com.ymt.mirage.car.repository.ActivityRepository;
import com.ymt.mirage.car.repository.ParticipationRepository;
import com.ymt.mirage.hdcy.service.ScheduleService;
import com.ymt.pz365.framework.param.service.ParamService;
import com.ymt.pz365.framework.weixin.service.WeixinService;
import com.ymt.pz365.framework.weixin.support.message.TemplateMessage;

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
	
	@Autowired
    private ActivityRepository activityRepository;
	
	@Autowired
    private ActivityParticipatorRepository activityParticipatorRepository;
	
	/**
     * 活动创建时的消息模板id
     */
    @Value("hdcy.message.template.activity.remind")
    private String activityRemindMessageCode;

    /**
     * 活动创建时的消息模板id
     */
    @Value("hdcy.domain.name")
    private String domainName;
    
    @Autowired
    private ParamService paramService;
    
    @Autowired
    private WeixinService weixinService;
	
	private Logger logger = LoggerFactory.getLogger(getClass());
	
	@Override
    @Scheduled(cron = "0 0 */1 * * *")
    public void activityRemind() {
	    List<Activity> activitys = activityRepository.findByStartTimeAfter(new Date());
	    for (Activity activity : activitys) {
	        List<ActivityParticipator> users = activityParticipatorRepository.findByActivityId(activity.getId());
	        DateTime startTime = new DateTime(activity.getStartTime());
            if(startTime.plusDays(-1).isBeforeNow()) {
                for (ActivityParticipator user : users) {
                    if(!user.isRemind1()) {
                        pushMessage(activity, user, 1);
                        user.setRemind1(true);
                        activityParticipatorRepository.save(user);
                    }
                }
            }else if(startTime.plusDays(-3).isBeforeNow()) {
                for (ActivityParticipator user : users) {
                    if(!user.isRemind3()) {
                        pushMessage(activity, user, 3);
                        user.setRemind3(true);
                        activityParticipatorRepository.save(user);
                    }
                }
            }
        }
    }

	private void pushMessage(Activity activity, ActivityParticipator user, int day) {
	    
	    TemplateMessage templateMessage = new TemplateMessage(user.getUser().getWeixinOpenId(), activityRemindMessageCode);
        templateMessage.addValue("first", "您报名的"+activity.getName()+"还有"+day+"天");
        templateMessage.addValue("keyword1", user.getUser().getNickname());
        templateMessage.addValue("keyword2", "线下活动通知");
        templateMessage.addValue("keyword3", new DateTime(activity.getStartTime()).toString("yyyy-MM-dd HH:mm"));
        templateMessage.addValue("keyword4", activity.getAddress());
        String content = paramService.getParam("templateContentForActivityRemind", "点击查看详情,[好多车友-服务平台]将给您带来更多更刺激的活动信息").getValue();
        templateMessage.addValue("remark", content);
        templateMessage.setUrl(domainName+"/#/activity/"+activity.getId());
        try {
            weixinService.pushTemplateMessage(templateMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

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
