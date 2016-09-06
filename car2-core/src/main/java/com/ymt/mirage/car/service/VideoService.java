/**
 * 
 */
package com.ymt.mirage.car.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ymt.mirage.car.dto.VideoInfo;

/**
 * @author zhailiang
 * @since 2016年5月27日
 */
public interface VideoService {
	
	Page<VideoInfo> query(VideoInfo lotteryInfo, Pageable pageable);
	
	VideoInfo create(VideoInfo lotteryInfo);

	VideoInfo getInfo(Long id);

	VideoInfo update(VideoInfo lotteryInfo);

	void delete(Long id);

}
