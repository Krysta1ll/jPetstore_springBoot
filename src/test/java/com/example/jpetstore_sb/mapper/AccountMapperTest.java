package com.example.jpetstore_sb.mapper;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AccountMapperTest {
@Autowired
AccountMapper accountMapper;

    @Test
    void getAccountByUsername() {
        System.out.println(accountMapper);
    }

    @Test
    void getAll() {
    }
}