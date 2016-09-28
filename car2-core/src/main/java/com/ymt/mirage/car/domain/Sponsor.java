package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class Sponsor extends DomainImpl{
	/**
	 * 主办方名称
	 */
	private String name;
	/**
	 * 主办方LOGO
	 */
	private String image;
	/**
	 * @return the sponsor
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param sponsor the sponsor to set
	 */
	public void setName(String sponsor) {
		this.name = sponsor;
	}
	/**
	 * @return the sponsorURL
	 */
	public String getImage() {
		return image;
	}
	/**
	 * @param sponsorURL the sponsorURL to set
	 */
	public void setImage(String sponsorURL) {
		this.image = sponsorURL;
	}
}
