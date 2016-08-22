/**
 * 
 */
package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;

import com.ymt.mirage.user.domain.User;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * @author zhailiang
 * @since 2016年6月5日
 */
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Participator extends DomainImpl {

	/**
	 * 用户
	 */
	@ManyToOne
	private User user;
	
	/**
	 * 参与的活动
	 */
	@ManyToOne
	private Participation participation;

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

	/**
	 * @return the participation
	 */
	public Participation getParticipation() {
		return participation;
	}

	/**
	 * @param participation the participation to set
	 */
	public void setParticipation(Participation participation) {
		this.participation = participation;
	}
	
}
