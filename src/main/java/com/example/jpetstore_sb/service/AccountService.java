package com.example.jpetstore_sb.service;

import com.example.jpetstore_sb.model.Account;

import java.util.List;

public interface AccountService {


    public Account getAccount(String username);


    public Account getAccount(Account account);


    public void insertAccount(Account account);


    public void updateAccount(Account account);

    public List<Account> getAll();
}