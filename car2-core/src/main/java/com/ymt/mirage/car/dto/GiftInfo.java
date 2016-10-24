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
	/**
     * 图片
     */
    private String image;
    /**
     * 品牌
     */
    private String brand;
    /**
     * 品牌图标
     */
    private String brandImage;
    /**
     * 豆子
     */
    private Integer beans;
	
	private Integer point;
	
	private Integer stock;
	
	private Integer used;
	
	private String desc;
	/**
	 * 
	 */
	private String brandDesc;
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

    /**
     * @return the image
     */
    public String getImage() {
        return image;
    }

    /**
     * @param image the image to set
     */
    public void setImage(String image) {
        this.image = image;
    }

    /**
     * @return the brand
     */
    public String getBrand() {
        return brand;
    }

    /**
     * @param brand the brand to set
     */
    public void setBrand(String brand) {
        this.brand = brand;
    }

    /**
     * @return the brandImage
     */
    public String getBrandImage() {
        return brandImage;
    }

    /**
     * @param brandImage the brandImage to set
     */
    public void setBrandImage(String brandImage) {
        this.brandImage = brandImage;
    }

    /**
     * @return the beans
     */
    public Integer getBeans() {
        return beans;
    }

    /**
     * @param beans the beans to set
     */
    public void setBeans(Integer beans) {
        this.beans = beans;
    }

    /**
     * @return the brandDesc
     */
    public String getBrandDesc() {
        return brandDesc;
    }

    /**
     * @param brandDesc the brandDesc to set
     */
    public void setBrandDesc(String brandDesc) {
        this.brandDesc = brandDesc;
    }

	
}
