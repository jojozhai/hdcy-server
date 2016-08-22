/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.ymt.mirage.user.domain.User;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * 一次投票
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
public class Voter extends DomainImpl {
	
	/**
	 * 参与者
	 */
	@ManyToOne
	private VotingParticipator participator;
	/**
	 * 投票者
	 */
	@ManyToOne
	private User user;
	/**
	 * @return the participator
	 */
	public VotingParticipator getParticipator() {
		return participator;
	}
	/**
	 * @param participator the participator to set
	 */
	public void setParticipator(VotingParticipator participator) {
		this.participator = participator;
	}
	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}
	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}
	
}
