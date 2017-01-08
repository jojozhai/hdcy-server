/**
 * 
 */
package com.ymt.mirage.hdcy.service;

/**
 * @author zhailiang
 * @since 2016年6月6日
 */
public interface ScheduleService {
	
	/**
	 * 将到达结束时间的活动状态置为已结束
	 * @author zhailiang
	 * @since 2016年8月4日
	 */
	void participationFinishSchedule();
	
	/**
	 * 将到达发布时间的文件自动发布
	 * 
	 * @author zhailiang
	 * @since 2016年8月4日
	 */
	void articleEnableSchedule();
	/**
	 * 将到达发布时间的视频自动发布
	 * 
	 * @author zhailiang
	 * @since 2017年1月6日
	 */
	void videoEnableSchedule();
	/**
	 * 活动提醒
	 * @author zhailiang
	 * @since 2016年12月18日
	 */
	void activityRemind();

}
