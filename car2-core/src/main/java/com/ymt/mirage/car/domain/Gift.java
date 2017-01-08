/**
 * 
 */
package com.ymt.mirage.car.domain;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Lob;

import com.ymt.pz365.data.jpa.domain.DomainImpl;

/**
 * @author zhailiang
 * @since 2016年6月23日
 */
@Entity
public class Gift extends DomainImpl {
	
	/**
	 * 名称
	 */
	private String name;
	/**
	 * 图片
	 */
	@ElementCollection
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
	 * 所需积分
	 */
	private int point;
	/**
	 * 豆子
	 */
	private int beans;
	/**
	 * 库存
	 */
	private int stock;
	/**
	 * 领取的数量
	 */
	private int used;
	/**
	 * 
	 */
	@Lob
	private String desc;
	/**
     * 
     */
    @Lob
    private String brandDesc;

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
	 * @return the point
	 */
	public int getPoint() {
		return point;
	}

	/**
	 * @param point the point to set
	 */
	public void setPoint(int point) {
		this.point = point;
	}

	/**
	 * @return the stock
	 */
	public int getStock() {
		return stock;
	}

	/**
	 * @param stock the stock to set
	 */
	public void setStock(int stock) {
		this.stock = stock;
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
	public int getUsed() {
		return used;
	}

	/**
	 * @param used the used to set
	 */
	public void setUsed(int used) {
		this.used = used;
	}

    /**
     * @return the beans
     */
    public int getBeans() {
        return beans;
    }

    /**
     * @param beans the beans to set
     */
    public void setBeans(int beans) {
        this.beans = beans;
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
