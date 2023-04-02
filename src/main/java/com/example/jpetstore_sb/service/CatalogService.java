package com.example.jpetstore_sb.service;

import com.example.jpetstore_sb.model.Category;
import com.example.jpetstore_sb.model.Item;
import com.example.jpetstore_sb.model.Product;

import java.util.List;

public interface CatalogService {
    public List<Category> getCategoryList();

    public Category getCategory(String categoryId);

    public Product getProduct(String productId);

    public List<Product> getProductListByCategory(String categoryId) ;

    // TODO enable using more than one keyword
    public List<Product> searchProductList(String keyword) ;

    public List<Item> getItemListByProduct(String productId) ;

    public Item getItem(String itemId) ;

    public boolean isItemInStock(String itemId) ;

}
