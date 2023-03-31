package com.example.jpetstore_sb.service;

import com.example.jpetstore_sb.model.Account;

public interface AccountService {


    public Account getAccount(String username);


    public Account getAccount(Account account);


    public void insertAccount(Account account);


    public void updateAccount(Account account);
}