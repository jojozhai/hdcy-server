/**
 * 
 */
package com.ymt.mirage.car.web.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ymt.mirage.car.dto.VideoInfo;
import com.ymt.mirage.car.service.VideoService;

/**
 * @author video
 *
 */
@RestController
@Profile("admin")
public class VideoAdminController {

	@Autowired
	private VideoService videoService;

	@RequestMapping(value = "/video", method = RequestMethod.POST)
	public VideoInfo create(@RequestBody VideoInfo videoInfo) {
		return videoService.create(videoInfo);
	}

	@RequestMapping(value = "/video", method = RequestMethod.GET)
	public Page<VideoInfo> query(VideoInfo videoInfo, Pageable pageable) {
		return videoService.query(videoInfo, pageable);
	}
	
	@RequestMapping(value = "/video/{id}", method = RequestMethod.GET)
	public VideoInfo getInfo(@PathVariable Long id) {
		return videoService.getInfo(id);
	}

	@RequestMapping(value = "/video/{id}", method = RequestMethod.PUT)
	public VideoInfo update(@RequestBody VideoInfo videoInfo) {
		return videoService.update(videoInfo);
	}

	@RequestMapping(value = "/video/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		videoService.delete(id);
	}

}
