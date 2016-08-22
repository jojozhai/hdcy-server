/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

/**
 * @author zhailiang
 * @since 2016年6月20日
 */
@Entity
public class ContraryParticipator extends Participator {

	private boolean state;

	public boolean isState() {
		return state;
	}

	public void setState(boolean state) {
		this.state = state;
	}

	/**
	 * 观点
	 */
	private String content;
	/**
	 * 
	 */
	private boolean red;
	/**
	 * 
	 */
	@ManyToOne
	private Contrary contrary;

	/**
	 * @return the content
	 */
	public String getContent() {
		return content;
	}

	/**
	 * @param content
	 *            the content to set
	 */
	public void setContent(String content) {
		this.content = content;
	}

	/**
	 * @return the red
	 */
	public boolean isRed() {
		return red;
	}

	/**
	 * @param red
	 *            the red to set
	 */
	public void setRed(boolean red) {
		this.red = red;
	}

	/**
	 * @return the contrary
	 */
	public Contrary getContrary() {
		return contrary;
	}

	/**
	 * @param contrary
	 *            the contrary to set
	 */
	public void setContrary(Contrary contrary) {
		this.contrary = contrary;
	}

}
