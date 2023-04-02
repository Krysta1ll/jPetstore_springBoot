package com.example.jpetstore_sb.controller;

import com.example.jpetstore_sb.model.Category;
import com.example.jpetstore_sb.model.Item;
import com.example.jpetstore_sb.model.Product;
import com.example.jpetstore_sb.service.CatalogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@SessionAttributes({"product", "cart","account"})
public class CatalogController {

    private final CatalogService catalogService;

    // 日志功能
    private final Logger logger = LoggerFactory.getLogger(CatalogController.class);

    public CatalogController(CatalogService catalogService) {
        this.catalogService = catalogService;
    }

    // 跳往主界面
    @GetMapping("/catalog/main")
    public String viewMain(){
        logger.info("到达主页");
        return "StoreViews/mainPage";
    }

    // 跳往商品大类
    @GetMapping("/catalog/category")
    public String viewCategory(@RequestParam("categoryId") String categoryId, Model model){

        if(categoryId != null){
            Category category = catalogService.getCategory(categoryId);
            List<Product> productList = catalogService.getProductListByCategory(categoryId);
            model.addAttribute("category",category);
            model.addAttribute("productList",productList);
        }
        logger.info("跳往商品大类,Id:"+categoryId);
        return "StoreViews/category";
    }

    // 跳往商品小类
    @GetMapping("/catalog/product")
    public String viewProduct(@ModelAttribute("productId") String productId, HttpSession session, Model model){
//        logger.debug("log..."); // 输出DEBUG级别的日志
        if(productId != null){
            logger.info(productId);
            Product product = catalogService.getProduct(productId);
            List<Item> itemList = catalogService.getItemListByProduct(productId);

            session.setAttribute("product",product);
            model.addAttribute("itemList",itemList);
            model.addAttribute("product",product);
        }
        logger.info("跳往商品小类,Id:"+productId);
        return "StoreViews/product";
    }

    // 跳往某一特定商品
    @GetMapping("/catalog/item")
    public String viewItem(@RequestParam("itemId") String itemId, Model model){

        if(itemId != null){
            Item item = catalogService.getItem(itemId);

            model.addAttribute("item",item);

        }
        logger.info("跳往某一特定商品,Id:"+itemId);
        return "StoreViews/item";
    }

    // 搜索商品
    @PostMapping("/searchProduct")
    public String searchProduct(@RequestParam("keyword") String keyword,Model model){

        if(keyword.trim().equals("")){
            return "StoreViews/mainPage";
        }

        List<Product> productList = catalogService.searchProductList(keyword);
        model.addAttribute("productList",productList);
        logger.info("搜索商品,关键字:"+keyword);
        return "StoreViews/searchProduct";
    }


}
