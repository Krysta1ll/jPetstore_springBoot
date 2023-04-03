package com.example.jpetstore_sb.model;


import java.io.Serializable;

//这里是后台管理员的实体类
public class Admin implements Serializable {
    private String username;
    private String password;
    private String email;

    public String getUsername() {
        return username;
    }
    public void setUsername(String adminId) {
        this.username = adminId;
    }


    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }


    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }


}
