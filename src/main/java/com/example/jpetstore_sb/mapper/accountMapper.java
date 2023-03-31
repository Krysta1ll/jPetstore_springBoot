package com.example.jpetstore_sb.mapper;

import com.example.jpetstore_sb.model.Account;

import java.util.List;

public interface accountMapper {
    List<Account> selectAll();
    Account selectAccount();
}