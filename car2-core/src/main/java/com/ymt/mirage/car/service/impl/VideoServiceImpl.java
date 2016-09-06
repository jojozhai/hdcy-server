/*
 * 项目名称：car2-core
 * 类名称: VideoServiceImpl
 * 创建时间: 2016年9月6日 上午9:41:09
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Video;
import com.ymt.mirage.car.dto.VideoInfo;
import com.ymt.mirage.car.repository.VideoRepository;
import com.ymt.mirage.car.repository.spec.VideoSpec;
import com.ymt.mirage.car.service.VideoService;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Service("videoService")
@Transactional
public class VideoServiceImpl implements VideoService {

    @Autowired
    private VideoRepository videoRepository;
    
    @Override
    public Page<VideoInfo> query(VideoInfo videoInfo, Pageable pageable) {
        Page<Video> pageData = videoRepository.findAll(new VideoSpec(videoInfo), pageable);
        return QueryResultConverter.convert(pageData, VideoInfo.class, pageable);
    }

    @Override
    public VideoInfo create(VideoInfo videoInfo) {
        Video video = new Video();
        BeanUtils.copyProperties(videoInfo, video);
        videoInfo.setId(videoRepository.save(video).getId());
        return videoInfo;
    }

    @Override
    public VideoInfo getInfo(Long id) {
        Video video = videoRepository.findOne(id);
        VideoInfo info = new VideoInfo();
        BeanUtils.copyProperties(video, info);
        return info;
    }

    @Override
    public VideoInfo update(VideoInfo videoInfo) {
        Video video = videoRepository.findOne(videoInfo.getId());
        BeanUtils.copyProperties(videoInfo, video);
        videoRepository.save(video);
        return videoInfo;
    }

    @Override
    public void delete(Long id) {
        videoRepository.delete(id);       
    }
    
}
