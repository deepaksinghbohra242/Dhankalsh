package com.membersvc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MembersvcApplication {

	public static void main(String[] args) {
		SpringApplication.run(MembersvcApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:5173") // You can configure specific origins here instead of "*" if needed
						.allowedMethods("GET", "POST", "PUT", "DELETE")
						.allowedHeaders("*")
						.exposedHeaders("Authorization")
						.allowCredentials(true)
						.maxAge(3600);
			}
		};
	}

}
