package com.example.jpetstore_sb.mapper;

import com.example.jpetstore_sb.model.Account;
import com.example.jpetstore_sb.model.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMapper {
    Admin getAdminByUsername(String username);

    Admin getAdminByMailAndPassword(Admin admin);

    void insertAdmin(Admin admin);

    void updateAdmin(Admin admin);

    void updateAccount(Account account);


}
