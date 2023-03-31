package com.example.jpetstore_sb;

import com.example.jpetstore_sb.mapper.AccountMapper;
import com.example.jpetstore_sb.model.Account;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runner.Runner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.io.InputStream;

@SpringBootTest
public class test {

    @Autowired
    private AccountMapper userMapper;

    @Test
    public void testInsert() throws Exception {
        userMapper.insertSignon(new Account());


    }

}