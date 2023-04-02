package com.example.jpetstore_sb.controller;

import com.example.jpetstore_sb.model.Cart;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
public class IndexController {


    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping ("/mainPage")
    public String mainPage() {
        return "StoreViews/mainPage";
    }

    @RequestMapping("/help")
    public String help() {
        return "OtherViews/help";
    }


    @RequestMapping ("/viewCart")
    public String viewCart(){


        return "StoreViews/cart";
    }
}
