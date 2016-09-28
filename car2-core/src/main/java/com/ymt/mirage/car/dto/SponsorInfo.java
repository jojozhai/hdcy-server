package com.ymt.mirage.car.dto;

public class SponsorInfo {
	private Long id;
	private String name;
	private String image;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String sponsor) {
		this.name = sponsor;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String sponsorURL) {
		this.image = sponsorURL;
	}

}
