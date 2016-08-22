/*
 * 项目名称：car2-core
 * 类名称: DataProcessorImpl
 * 创建时间: 2016年7月27日 下午11:56:18
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.service.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.mirage.article.domain.Article;
import com.ymt.mirage.article.domain.ArticleTag;
import com.ymt.mirage.article.repository.ArticleRepository;
import com.ymt.mirage.article.repository.ArticleTagRepository;
import com.ymt.mirage.car.service.DataProcessor;
import com.ymt.mirage.tag.domain.Tag;
import com.ymt.mirage.tag.repository.TagRepository;
import com.ymt.mirage.user.domain.User;
import com.ymt.mirage.user.repository.UserRepository;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
@Component
@Transactional
public class DataProcessorImpl implements DataProcessor , InitializingBean {

    @Autowired
    private ArticleRepository articleRepository;
    
    @Autowired
    private ArticleTagRepository articleTagRepository;
    
    @Autowired
    private TagRepository tagRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    private JdbcTemplate jdbcTemplate15;
    
    private JdbcTemplate jdbcTemplate10;

    /* (non-Javadoc)
     * @see com.ymt.mirage.car.service.DataProcessor#import1(int, int)
     */
    @Override
    public void import1(int start, int end) {
        List<Map<String, Object>> pageData = jdbcTemplate15.queryForList("select * from pz_user where pz_created_time > '2016-07-28 09:00:00' limit "+start+","+end);
        User user;
        for (Map<String, Object> map : pageData) {
            
            user = new User();
            user.setAddress((String)map.get("pz_address"));
            user.setCar((String)map.get("pz_car"));
            user.setCity((String)map.get("pz_city"));
            user.setCountry((String)map.get("pz_contry"));
            user.setHeadimgOssUrl((String)map.get("pz_headimg_oss_url"));
            user.setHeadimgOssUrlForIncircle((String)map.get("pz_headimg_oss_url_for_incircle"));
            user.setHeadimgurl((String)map.get("pz_headimgurl"));
            user.setLevel((String)map.get("pz_level"));
            user.setMobile((String)map.get("pz_mobile"));
            user.setNickname((String)map.get("pz_nickname"));
            user.setParticipationCount(0);
            user.setPassword((String)map.get("pz_password"));
            user.setPoint((int)map.get("pz_point"));
            user.setProvince((String)map.get("pz_province"));
            user.setRealname((String)map.get("pz_realname"));
            user.setSex((String)map.get("pz_sex"));
            user.setUsername((String)map.get("pz_username"));
            user.setVip(false);
            user.setWeixin((String)map.get("pz_weixin"));
            user.setWeixinOpenId((String)map.get("pz_weixin_open_id"));
            user.setWeixinUnionId((String)map.get("pz_weixin_union_id"));
            
            userRepository.save(user);
        }
        pageData = null;
    }
    
    public void import2(int start, int end) {
        List<Map<String, Object>> pageData = jdbcTemplate10.queryForList("select * from yd_user limit "+start+","+end);
        for (Map<String, Object> map : pageData) {
            
            User user = userRepository.findByWeixinOpenId((String)map.get("yd_weixinopenid"));
            if(user == null){
                user = new User();
                user.setAddress((String)map.get("yd_address"));
                user.setCar((String)map.get("yd_car"));
                user.setCity((String)map.get("yd_city"));
                user.setCountry((String)map.get("yd_contry"));
                user.setHeadimgurl((String)map.get("yd_headimgurl"));
                user.setMobile((String)map.get("yd_mobile"));
                user.setNickname((String)map.get("yd_nickname"));
                user.setPassword((String)map.get("yd_password"));
                user.setPoint((int)map.get("yd_point"));
                user.setProvince((String)map.get("yd_province"));
                user.setRealname((String)map.get("yd_realname"));
                user.setSex((String)map.get("yd_sex"));
                user.setUsername((String)map.get("yd_username"));
                user.setVip(false);
                user.setWeixin((String)map.get("yd_weixin"));
                user.setWeixinOpenId((String)map.get("yd_weixinopenid"));
                user.setWeixinUnionId((String)map.get("yd_unionid"));
                
                userRepository.save(user);
            }
        }
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
    public void importArticle(Long id) {
        Map<String, Object> data = jdbcTemplate10.queryForMap("select * from yd_info where yd_id = "+id);
        Article article = new Article();
        article.setComment("");
        article.setContent((String)data.get("yd_content"));
        article.setCreatedTime((Date)data.get("yd_createddate"));
        article.setEnable(true);
        article.setImage((String)data.get("yd_image"));
        article.setImage2((String)data.get("yd_image"));
        article.setPrincipal((String)data.get("yd_principal"));
        article.setReadCount((Integer)data.get("yd_readcount"));
        article.setTitle((String)data.get("yd_title"));
        article.setTop(false);
        
        articleRepository.save(article);
        
        BigDecimal typeIdB = (BigDecimal)data.get("yd_type_id");
        if(typeIdB == null){
            Tag tag = tagRepository.getOne(2L);
            ArticleTag articleTag = new ArticleTag();
            articleTag.setTag(tag);
            articleTag.setTarget(article);
            articleTagRepository.save(articleTag);
        }else{
            Long typeId = typeIdB.longValue();
            if(typeId.equals(44667158169147L)){
                
                Tag tag = tagRepository.getOne(2L);
                ArticleTag articleTag = new ArticleTag();
                articleTag.setTag(tag);
                articleTag.setTarget(article);
                articleTagRepository.save(articleTag);
                
            }else if(typeId.equals(45227691590796L)){
                
                Tag tag = tagRepository.getOne(2L);
                ArticleTag articleTag = new ArticleTag();
                articleTag.setTag(tag);
                articleTag.setTarget(article);
                articleTagRepository.save(articleTag);
                
            }else if(typeId.equals(45246456569414L)){
                
                Tag tag = tagRepository.getOne(3L);
                ArticleTag articleTag = new ArticleTag();
                articleTag.setTag(tag);
                articleTag.setTarget(article);
                articleTagRepository.save(articleTag);
                
            }else if(typeId.equals(45263002756919L)){
                
                Tag tag = tagRepository.getOne(4L);
                ArticleTag articleTag = new ArticleTag();
                articleTag.setTag(tag);
                articleTag.setTarget(article);
                articleTagRepository.save(articleTag);
                
            }else if(typeId.equals(45273643727770L)){
                
                Tag tag = tagRepository.getOne(5L);
                ArticleTag articleTag = new ArticleTag();
                articleTag.setTag(tag);
                articleTag.setTarget(article);
                articleTagRepository.save(articleTag);
                
            }
        }
    }

}
