package com.example.jpetstore_sb.service;

import com.example.jpetstore_sb.model.Account;
import com.example.jpetstore_sb.model.Admin;

public interface AdminService {
    public Admin getAdmin(String username);
    public Admin getAdmin(Admin admin);

    public void insertAdmin(Admin admin);
    public void updateAdmin(Admin admin);

public void updateAccount(Account account);
}
