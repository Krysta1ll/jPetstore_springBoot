package com.example.jpetstore_sb;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("com.example.jpetstore_sb.mapper")

public class JpetstoreSbApplication {

    public static void main(String[] args) {
        SpringApplication.run(JpetstoreSbApplication.class, args);
    }


}
