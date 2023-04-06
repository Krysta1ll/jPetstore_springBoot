package com.example.jpetstore_sb.controller;

import com.alibaba.fastjson.JSON;

import com.example.jpetstore_sb.model.Account;
import com.example.jpetstore_sb.model.Admin;
import com.example.jpetstore_sb.service.AccountService;
import com.example.jpetstore_sb.service.AdminService;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@SessionAttributes({"admin"})
public class AdminController {

    private final AdminService adminService;
    private final AccountService accountService;

    public AdminController(AdminService adminService, AccountService accountService) {
        this.adminService = adminService;
        this.accountService = accountService;
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
            return "AdminViews/index";
        }
        model.addAttribute("admin",null);
        logger.info("登录失败");
        return "AdminViews/adminLogin";

    }


    @GetMapping("/admin/accountList")
    public String accountList(Admin admin,HttpSession session,Model model){
        admin = (Admin) session.getAttribute("admin");
        if(admin!=null)
        {
            return "AdminViews/accountList";
        }
        return "/";

    }
    @GetMapping("/admin/memberEdit")
    public String memberEdit(Admin admin,HttpSession session,Model model){
        admin = (Admin) session.getAttribute("admin");
        if(admin!=null)
        {
            return "AdminViews/member-edit";
        }
        return "/";

    }
    @PostMapping("/admin/confirmEdit")
    public String confirmEdit(@Valid Account account, HttpSession session, Model model){

        if(!account.getPassword().equals("") && !account.getRepeatedPassword().equals("") && account.getPassword().equals(account.getRepeatedPassword())){
            accountService.updateAccount(account);
            session.setAttribute("account",account);
            model.addAttribute("account",account);

            return "AdminViews/accountList";
        }else{
            logger.info("确认修改用户信息");
            return "AccountViews/editAccount";
        }

    }

    @ResponseBody
    @GetMapping("/getCustomerList")
    public String  getCustomerList() {
        List<Account> temp = accountService.getAll();
        String test =JSON.toJSONString(temp);
        System.out.println("getCustomerList===");
        return test;
    }



}
