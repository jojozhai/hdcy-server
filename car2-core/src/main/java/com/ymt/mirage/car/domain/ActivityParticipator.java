/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
public class ActivityParticipator extends Participator {

	/**
	 * 
	 */
	@ManyToOne
	private Activity activity;
	
	/**
	 * 留言
	 */
	private String message;
	/**
	 * @return the activity
	 */
	public Activity getActivity() {
		return activity;
	}
	/**
	 * @param activity the activity to set
	 */
	public void setActivity(Activity activity) {
		this.activity = activity;
	}
	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}
	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}
	
}
