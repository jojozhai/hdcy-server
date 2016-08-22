/**
 * 
 */
package com.ymt.mirage.poster.service.impl;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.ymt.HdcyWeixinApplication;
import com.ymt.mirage.poster.service.UserPosterService;

/**
 * @author zhailiang
 * @since 2016年7月5日
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(HdcyWeixinApplication.class)
@Transactional
@ActiveProfiles("junit")
public class PosterTest {
	
	@Autowired
	private UserPosterService userPosterService;
	
	@Test
	public void test() throws Exception {
		
		userPosterService.create(1133L, 1368L);
		
	}

}
