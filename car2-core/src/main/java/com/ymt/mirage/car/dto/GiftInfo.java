/**
 * 
 */
package com.ymt.mirage.car.dto;

import java.util.List;

/**
 * @author zhailiang
 * @since 2016年6月23日
 */
public class GiftInfo {
	
	private Long id;
	
	private String name;
	
	private List<String> images;
	
	private Integer point;
	
	private Integer stock;
	
	private Integer used;
	
	private String desc;
	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the images
	 */
	public List<String> getImages() {
		return images;
	}

	/**
	 * @param images the images to set
	 */
	public void setImages(List<String> images) {
		this.images = images;
	}

	/**
	 * @return the point
	 */
	public Integer getPoint() {
		return point;
	}

	/**
	 * @param point the point to set
	 */
	public void setPoint(Integer point) {
		this.point = point;
	}

	/**
	 * @return the stock
	 */
	public Integer getStock() {
		return stock;
	}

	/**
	 * @param stock the stock to set
	 */
	public void setStock(Integer stock) {
		this.stock = stock;
	}

	/**
	 * @return the desc
	 */
	public String getDesc() {
		return desc;
	}

	/**
	 * @param desc the desc to set
	 */
	public void setDesc(String desc) {
		this.desc = desc;
	}

	/**
	 * @return the used
	 */
	public Integer getUsed() {
		return used;
	}

	/**
	 * @param used the used to set
	 */
	public void setUsed(Integer used) {
		this.used = used;
	}

	
}
