/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.vdurmont.emoji.EmojiParser;

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
	 * 提醒3天
	 */
	private boolean remind3;
	/**
	 * 提醒1天
	 */
	private boolean remind1;
	
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
		return EmojiParser.parseToUnicode(message);
	}
	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = EmojiParser.parseToAliases(message);
	}
    /**
     * @return the remind3
     */
    public boolean isRemind3() {
        return remind3;
    }
    /**
     * @param remind3 the remind3 to set
     */
    public void setRemind3(boolean remind3) {
        this.remind3 = remind3;
    }
    /**
     * @return the remind1
     */
    public boolean isRemind1() {
        return remind1;
    }
    /**
     * @param remind1 the remind1 to set
     */
    public void setRemind1(boolean remind1) {
        this.remind1 = remind1;
    }
	
}
