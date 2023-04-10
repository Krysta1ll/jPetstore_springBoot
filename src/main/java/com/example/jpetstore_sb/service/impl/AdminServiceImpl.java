package com.example.jpetstore_sb.service.impl;

import com.example.jpetstore_sb.mapper.AdminMapper;
import com.example.jpetstore_sb.model.Account;
import com.example.jpetstore_sb.model.Admin;
import com.example.jpetstore_sb.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminMapper adminMapper;

    @Override
    public Admin getAdmin(String username) {
        return adminMapper.getAdminByUsername(username);
    }

    @Override
    public Admin getAdmin(Admin admin) {
        return adminMapper.getAdminByMailAndPassword(admin);
    }

    @Override
    public void insertAdmin(Admin admin) {
        adminMapper.insertAdmin(admin);
    }

    @Override
    public void updateAdmin(Admin admin) {
        adminMapper.updateAdmin(admin);
    }

    @Override
    public void updateAccount(Account account){
        adminMapper.updateAccount(account);
    }


}
