/*
 * 项目名称：car2-core
 * 类名称: StatisticsServiceImpl
 * 创建时间: 2017年1月12日 下午2:26:28
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.transaction.Transactional;

import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ymt.mirage.car.domain.Statistics;
import com.ymt.mirage.car.dto.AliResponse;
import com.ymt.mirage.car.dto.DrawPageStatisticsInfo;
import com.ymt.mirage.car.dto.DrawRegionStatisticsInfo;
import com.ymt.mirage.car.dto.DrawRegionStatisticsItem;
import com.ymt.mirage.car.repository.StatisticsRepository;
import com.ymt.mirage.car.service.StatisticsService;
import com.ymt.mirage.car.utils.HttpUtils;
import com.ymt.pz365.data.jpa.support.Domain2InfoConverter;
import com.ymt.pz365.data.jpa.support.QueryResultConverter;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
@Service("statisticsService")
@Transactional
public class StatisticsServiceImpl implements StatisticsService {
    
    @Autowired
    private StatisticsRepository statisticsRepository;
    
    private ObjectMapper objectMapper = new ObjectMapper();
    
    private Set<String> keys = new HashSet<>();

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.StatisticsService#count(java.lang.String)
     */
    @Override
    public void count(String ip, String number) {
        
        String region = "未知";
        
        AliResponse aliResponse = getIpInfo(ip);
        
        if(aliResponse != null) {
            region = aliResponse.getData().getRegion();
        }
        
        if(StringUtils.isBlank(region)) {
            region = "未知";
        }
        
        int result = statisticsRepository.updateCount(new Date(), region, number);
        
        if(result == 0) {
            
            String key = new DateTime().toString("yyyy-MM-dd")+number+region;
            
            if(!keys.contains(key)) {
                
                keys.add(key);
             
                Statistics statistics = new Statistics();
                statistics.setCount(1);
                statistics.setDate(new Date());
                statistics.setRegion(region);
                statistics.setNumber(number);
                statisticsRepository.save(statistics);
                
                keys.remove(key);
                
            }
        }
        
    }
    
    private AliResponse getIpInfo(String ip){
        AliResponse result = null;
        String host = "https://dm-81.data.aliyun.com";
        String path = "/rest/160601/ip/getIpInfo.json";
        String method = "GET";
        Map<String, String> headers = new HashMap<String, String>();
        headers.put("Authorization", "APPCODE 4d966f1953a0475a92c71e70c7a55075");
        Map<String, String> querys = new HashMap<String, String>();
        querys.put("ip", ip);

        try {
            HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);
            String content = EntityUtils.toString(response.getEntity());
            result = objectMapper.readValue(content, AliResponse.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return result;
    }

    @Override
    public List<DrawPageStatisticsInfo> statisticsByPage(Pageable pageable) {
        List<Object[]> data = statisticsRepository.statisticsByPage();
        return QueryResultConverter.convert(data, new Domain2InfoConverter<Object[], DrawPageStatisticsInfo>() {
            @Override
            public DrawPageStatisticsInfo convert(Object[] source) {
                DrawPageStatisticsInfo info = new DrawPageStatisticsInfo();
                info.setCount(((Long) source[2]).intValue());
                info.setDate((Date) source[0]);
                info.setNumber((String) source[1]);
                return info;
            }
        });
    }

    @Override
    public List<Long> countByPage() {
        List<Long> result = statisticsRepository.countByPage();
        return result;
    }

    @Override
    public List<DrawRegionStatisticsInfo> statisticsByRegion() {
        
        List<DrawRegionStatisticsInfo> result = new ArrayList<>();
        List<Statistics> datas = statisticsRepository.findByNumber("1");
        
        Map<String, List<Statistics>> map = new HashMap<>();
        
        for (Statistics data : datas) {
            
            String date = new DateTime(data.getDate()).toString("yyyy-MM-dd");
            
            List<Statistics> dayData = map.get(date);
            
            if(dayData == null) {
                dayData = new ArrayList<>();
            }
            
            dayData.add(data);
            
            map.put(date, dayData);
            
        }
        
        Set<String> keys = map.keySet();
        for (String date : keys) {
            
            DrawRegionStatisticsInfo info = new DrawRegionStatisticsInfo();
            
            List<Statistics> dayData = map.get(date);
            
            info.setDate(date);
            
            long total = 0;
            for (Statistics statistics : dayData) {
                total = total + statistics.getCount();
            }
            
            for (Statistics statistics : dayData) {
                DrawRegionStatisticsItem item = new DrawRegionStatisticsItem();
                
                item.setCount(new Long(statistics.getCount()));
                item.setRegion(statistics.getRegion());
                item.setRate(new BigDecimal(statistics.getCount()).divide(new BigDecimal(total), 2, RoundingMode.HALF_UP));
                
                info.add(item);
            }
            
            Collections.sort(info.getItems(), new Comparator<DrawRegionStatisticsItem>() {
                @Override
                public int compare(DrawRegionStatisticsItem o1, DrawRegionStatisticsItem o2) {
                    return o2.getCount().compareTo(o1.getCount());
                }
            });
            
            if(info.getItems().size() > 10) {
                info.getItems().subList(0, 10);
            }
            
            result.add(info);
            
        }
        
        Collections.sort(result, new Comparator<DrawRegionStatisticsInfo>() {
            @Override
            public int compare(DrawRegionStatisticsInfo o1, DrawRegionStatisticsInfo o2) {
                return o2.getDate().compareTo(o1.getDate());
            }
        });
        
        return result;
    }

}
