package com.example.jpetstore_sb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {


    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping ("/mainPage")
    public String mainPage() {
        return "mainPage";
    }

    @RequestMapping("/help")
    public String help() {
        return "help";
    }


}
