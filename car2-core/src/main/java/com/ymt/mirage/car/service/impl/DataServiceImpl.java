/*
 * 项目名称：car2-core
 * 类名称: DataServiceImpl
 * 创建时间: 2016年7月25日 下午2:48:08
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.io.FileInputStream;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.car.domain.Leader;
import com.ymt.mirage.car.domain.Participator;
import com.ymt.mirage.car.repository.LeaderRepository;
import com.ymt.mirage.car.repository.ParticipatorRepository;
import com.ymt.mirage.car.service.DataProcessor;
import com.ymt.mirage.car.service.DataService;
import com.ymt.mirage.user.domain.User;
import com.ymt.pz365.framework.aliyun.oss.OssFileService;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Service
@Transactional
public class DataServiceImpl implements DataService, InitializingBean {
    
    
    private JdbcTemplate jdbcTemplate15;
    
    private JdbcTemplate jdbcTemplate10;
    
    @Autowired
    private DataProcessor dataProcessor;
    
    @Autowired
    private OssFileService ossFileService;
    
    @Autowired
    private LeaderRepository leaderRepository;
    
    @Autowired
    private ParticipatorRepository participatorRepository;

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.DataService#userData()
     */
    @Override
    public void userData() throws ParseException {
        importFromHdcy15();
    }
    
    @Override
    public void userData2() {
        importFromHdcy10();
    }

    private void importFromHdcy10() {
        int pagesize = 1000;
        int pagecount = 0;
        
        long count = jdbcTemplate10.queryForObject("select count(*) from yd_user", Long.class);
        pagecount = (int) (count/pagesize + 1);
        
        for (int i = 1; i < pagecount; i++) {
            int start = i*pagesize;
            dataProcessor.import2(start, pagesize);
            System.out.println(i);
        }
    }

    private void importFromHdcy15() throws ParseException {
        int pagesize = 1000;
        int pagecount = 0;
        
        Date date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2016-07-28 09:00:00");
        long count = jdbcTemplate15.queryForObject("select count(*) from pz_user where pz_created_time > ?", new Object[]{date}, Long.class);
        pagecount = (int) (count/pagesize + 1);
        
        for (int i = 0; i < pagecount; i++) {
            int start = i*pagesize;
            dataProcessor.import1(start, pagesize);
            System.out.println(i);
        }
    }

    
    public static void main(String[] args) {
        System.out.println(65323/1000 + 1);
    }
    

    @Override
    public void afterPropertiesSet() throws Exception {
        BasicDataSource dataSource15 = new BasicDataSource();
        dataSource15.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource15.setUrl("jdbc:mysql://haoduocheyouo.mysql.rds.aliyuncs.com:3306/haoduocheyou?useUnicode=yes&characterEncoding=UTF-8");
        dataSource15.setUsername("haoduocheyou");
        dataSource15.setPassword("yangzhen");
        this.jdbcTemplate15 = new JdbcTemplate(dataSource15);
        
        BasicDataSource dataSource10 = new BasicDataSource();
        dataSource10.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource10.setUrl("jdbc:mysql://123.56.231.56:3306/car?useUnicode=yes&characterEncoding=UTF-8");
        dataSource10.setUsername("root");
        dataSource10.setPassword("abcd1234");
        this.jdbcTemplate10 = new JdbcTemplate(dataSource10);
    }

    @Override
    public void articleData() {
        
        List<Map<String, Object>> ids = jdbcTemplate10.queryForList("select yd_id from yd_info");
        int index = 0;
        for (Map<String, Object> id : ids) {
            dataProcessor.importArticle(((BigDecimal)id.get("yd_id")).longValue());
            System.out.println(index++);
        }
    }

    @Override
    public void clean() {
        
        List<Map<String, Object>> datas = jdbcTemplate15.queryForList("SELECT pz_weixin_open_id, count(pz_weixin_open_id) FROM pz_user group by pz_weixin_open_id having count(pz_weixin_open_id) > 1");
        int index = 0;
        for (Map<String, Object> data : datas) {
            String openId = (String)data.get("pz_weixin_open_id");
            List<Map<String, Object>> ids = jdbcTemplate15.queryForList("select pz_id from pz_user where pz_weixin_open_id = '"+openId+"'");
            System.out.println(index++);
            jdbcTemplate15.update("delete from pz_user where pz_id = "+ids.get(0).get("pz_id"));
        }
        System.out.println(index);
        
    }

    @Override
    public void image() {
        List<Map<String, Object>> datas = jdbcTemplate15.queryForList("SELECT pz_id, pz_image FROM pz_article");
        int index = 0;
        for (Map<String, Object> data : datas) {
            String imageName = (String)data.get("pz_image");
            Long id = (Long)data.get("pz_id");
            FileInputStream inputStream = null;
            try {
                inputStream = new FileInputStream("c:/car/file/"+imageName);
                String osspath = ossFileService.uploadImage(inputStream);
                jdbcTemplate15.update("update pz_article set pz_image = '"+osspath+"', pz_image2 = '"+osspath+"' where pz_id="+id);
                System.out.println(index++);
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                if(inputStream != null) {
                    IOUtils.closeQuietly(inputStream);
                }
            }
            
        }
    }

    @Override
    public void count() {
        List<Leader> leaders = leaderRepository.findAll();
        for (Leader leader : leaders) {
            User user = leader.getUser();
            List<Participator> participators = participatorRepository.findByUserId(user.getId());
            user.setParticipationCount(participators.size());
        }
    }

}
