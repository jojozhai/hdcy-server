package com.ymt.mirage.car.domain;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import com.ymt.mirage.user.domain.User;
import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * @author zhailiang
 * @since 2016年6月23日
 */
@Entity
public class UserGift extends DomainImpl {
	
	@ManyToOne
	private User user;
	@ManyToOne
	private Gift gift;
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
	 * @return the gift
	 */
	public Gift getGift() {
		return gift;
	}
	/**
	 * @param gift the gift to set
	 */
	public void setGift(Gift gift) {
		this.gift = gift;
	}

}
