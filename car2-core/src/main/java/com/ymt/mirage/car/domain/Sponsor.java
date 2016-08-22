package com.ymt.mirage.car.domain;

import javax.persistence.Entity;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

@Entity
public class Sponsor extends DomainImpl{
	/**
	 * 主办方名称
	 */
	private String sponsor;
	/**
	 * 主办方LOGO
	 */
	private String sponsorURL;
	/**
	 * @return the sponsor
	 */
	public String getSponsor() {
		return sponsor;
	}
	/**
	 * @param sponsor the sponsor to set
	 */
	public void setSponsor(String sponsor) {
		this.sponsor = sponsor;
	}
	/**
	 * @return the sponsorURL
	 */
	public String getSponsorURL() {
		return sponsorURL;
	}
	/**
	 * @param sponsorURL the sponsorURL to set
	 */
	public void setSponsorURL(String sponsorURL) {
		this.sponsorURL = sponsorURL;
	}
}
