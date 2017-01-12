/*
 * 项目名称：car2-core
 * 类名称: StatisticsRepository
 * 创建时间: 2017年1月12日 下午2:19:09
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2017 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ymt.mirage.car.domain.Statistics;
import com.ymt.pz365.data.jpa.repository.PzRepository;

/**
 *
 *
 * @author zhailiang@pz365.com
 */
public interface StatisticsRepository extends PzRepository<Statistics> {
    
    @Modifying
    @Query("update Statistics s set s.count = s.count + 1 where s.date = ?1 and s.region = ?2 and s.number = ?3")
    int updateCount(Date date, String region, String number);
    
    /**
     * @return
     * @author zhailiang
     * @since 2017年1月12日
     */
    @Query("select "
            + "s.date as date,"
            + "s.number as number,"
            + "sum(s.count) as count "
            + "from Statistics s "
            + "group by "
            + "date,number "
            + "order by "
            + "date desc, "
            + "number asc")
    List<Object[]> statisticsByPage();

    @Query("select sum(s.count) from Statistics s group by s.number order by s.number asc")
    List<Long> countByPage();

    List<Statistics> findByNumber(String number);

}
