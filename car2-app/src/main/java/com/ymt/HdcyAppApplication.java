/**
 * 
 */
package com.ymt;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.ymt.pz365.data.jpa.repository.PzRepositoryImpl;
import com.ymt.pz365.framework.core.utils.SpringBoot;

/**
 * @author zhailiang
 * @since 2016年4月8日
 */
@SpringBootApplication
@EnableJpaRepositories(repositoryBaseClass = PzRepositoryImpl.class)
public class HdcyAppApplication extends SpringBootServletInitializer {
	
	public static void main(String[] args) {
		SpringBoot.start(HdcyAppApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(HdcyAppApplication.class);
	}

}