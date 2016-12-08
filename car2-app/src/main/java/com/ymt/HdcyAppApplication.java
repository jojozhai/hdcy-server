/**
 * 
 */
package com.ymt;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.ymt.pz365.data.jpa.repository.PzRepositoryImpl;
import com.ymt.pz365.framework.core.utils.SpringBoot;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author zhailiang
 * @since 2016年4月8日
 */
@SpringBootApplication
@EnableJpaRepositories(repositoryBaseClass = PzRepositoryImpl.class)
@EnableSwagger2
public class HdcyAppApplication extends SpringBootServletInitializer {
    
    @Bean
    public Docket swaggerSpringMvcPlugin() {
        ApiInfo apiInfo = new ApiInfo("sample of springboot", "sample of springboot", null, null, null, null, null);
        Docket docket = new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.any()).build()
            .apiInfo(apiInfo).useDefaultResponseMessages(false);
        return docket;
    }
	
	public static void main(String[] args) {
		SpringBoot.start(HdcyAppApplication.class, args);
	}
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(HdcyAppApplication.class);
	}

}