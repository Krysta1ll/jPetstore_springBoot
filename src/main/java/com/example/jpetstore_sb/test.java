package com.example.jpetstore_sb;

import com.example.jpetstore_sb.mapper.accountMapper;
import com.example.jpetstore_sb.model.Account;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class test {
    public static void main(String[] args) throws IOException {
        String resource = "config/Mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();
        accountMapper accouts = sqlSession.getMapper(accountMapper.class);
        /*List<User> selectall = users.selectall();
        System.out.println(selectall);*/
        Account zhangsan = accouts.selectAccount();
        String s = zhangsan.toString();
        System.out.println(s);

    }
}