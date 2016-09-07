/*
 * 项目名称：car2-core
 * 类名称: VideoSpec
 * 创建时间: 2016年9月6日 上午9:42:15
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.repository.spec;

import com.ymt.mirage.car.domain.Video;
import com.ymt.mirage.car.dto.VideoInfo;
import com.ymt.pz365.data.jpa.repository.spec.PzSimpleSpecification;
import com.ymt.pz365.data.jpa.repository.spec.QueryWraper;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public class VideoSpec extends PzSimpleSpecification<Video, VideoInfo> {

    public VideoSpec(VideoInfo condition) {
        super(condition);
    }

    @Override
    protected void addCondition(QueryWraper<Video> queryWraper) {
        addLikeCondition(queryWraper, "name");
        addEqualsCondition(queryWraper, "enable");
        addEqualsCondition(queryWraper, "top");
    }

}
