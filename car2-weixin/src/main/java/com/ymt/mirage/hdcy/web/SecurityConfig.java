/**
 * 
 */
package com.ymt.mirage.hdcy.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ymt.mirage.user.service.UserService;

/**
 * @author zhailiang
 *
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	    auth.userDetailsService(userService).passwordEncoder(passwordEncoder);
	}
	
	protected void configure(HttpSecurity http) throws Exception {
	    http.csrf().disable() 
//	    	.httpBasic()
//	    		.and()
	        .authorizeRequests()
	        .antMatchers(HttpMethod.POST, 
	        		"/comment", //发表评论
	        		"/votingParticipator", //参与照片投票
	        		"/votingParticipator/vote", //给照片投票
	        		"/activityParticipator", //参与线下活动
	        		"/contraryParticipator", //参与观点投票活动
	        		"/leader",//申请大咖
	        		"/lottery"//参与抽奖
	        		).authenticated()
	        .antMatchers(HttpMethod.GET, 
	                "/user/current", 
	                "/votingParticipator/*/vote", 
	                "/lottery/*/permission",
	                "/participator/member").authenticated()
	        .anyRequest().permitAll()
	        	.and()
	        .headers().frameOptions().disable();
	    
	}

}
