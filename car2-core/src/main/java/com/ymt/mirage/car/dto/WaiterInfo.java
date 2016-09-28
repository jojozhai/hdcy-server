package com.ymt.mirage.car.dto;

public class WaiterInfo {
	private Long id;
	/**
     * 客服名称
     */
    private String name;
    /**
     * 客服微信
     */
    private String weixin;
    /**
     * 客服联系电话
     */
    private String phone;
    /**
     * 客服头像
     */
    private String image;
    /**
     * 二维码
     */
    private String qrcode;
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
     * @return the phone
     */
    public String getPhone() {
        return phone;
    }
    /**
     * @param phone the phone to set
     */
    public void setPhone(String phone) {
        this.phone = phone;
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
     * @return the weixin
     */
    public String getWeixin() {
        return weixin;
    }
    /**
     * @param weixin the weixin to set
     */
    public void setWeixin(String weixin) {
        this.weixin = weixin;
    }
    /**
     * @return the qrcode
     */
    public String getQrcode() {
        return qrcode;
    }
    /**
     * @param qrcode the qrcode to set
     */
    public void setQrcode(String qrcode) {
        this.qrcode = qrcode;
    }

}
