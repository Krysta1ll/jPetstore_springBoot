package com.example.jpetstore_sb.controller;


import com.example.jpetstore_sb.model.Account;
import com.example.jpetstore_sb.model.Admin;
import com.example.jpetstore_sb.service.AdminService;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.validation.Valid;

@Controller
@SessionAttributes({"admin"})
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    private final Logger logger= LoggerFactory.getLogger(AdminController.class);


    @GetMapping("/admin/adminLogin")
    public String adminLogin(){
        logger.info("进入管理员登录界面");
        return "AdminViews/adminLogin";
    }

    @GetMapping("/admin/adminRegister")
    public String adminRegister(){
        logger.info("进入管理员注册界面");
        return "AdminViews/adminRegister";
    }

    @PostMapping("/admin/registerCheck")
    public String registerCheck(Admin admin, Model model){
        logger.info("开始管理员注册");
        Admin temp = adminService.getAdmin(admin.getUsername());
        Admin t =null;
        if(temp ==null){
            adminService.insertAdmin(admin);
            logger.info("创建成功");
            model.addAttribute("admin",t);
            return "AdminViews/adminLogin";
        }
        model.addAttribute("admin",t);
        logger.info("创建失败");
        return "AdminViews/adminRegister";
    }

    @PostMapping("/admin/loginCheck")
    public String loginCheck(Admin admin,HttpSession session,Model model){
        logger.info("进行登录");
        admin = adminService.getAdmin(admin);
        if(admin!=null){
            session.setAttribute("admin",admin);
            model.addAttribute("admin",admin);
            logger.info("登录成功");
            return "test/success";
        }
        model.addAttribute("admin",null);
        logger.info("登录失败");
        return "AdminViews/adminLogin";

    }


}
