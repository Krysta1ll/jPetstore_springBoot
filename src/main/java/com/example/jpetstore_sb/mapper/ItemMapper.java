package com.example.jpetstore_sb.mapper;

import com.example.jpetstore_sb.model.Item;

import java.util.List;
import java.util.Map;

public interface ItemMapper {

    // 更新库存
    void updateInventoryQuantity(Map<String, Object> param);

    // 得到商品库存
    int getInventoryQuantity(String itemId);

    // 根据productId得到对应的所有的商品
    List<Item> getItemListByProduct(String productId);

    // 根据itemId 得到对应的某个商品
    Item getItem(String itemId);

    List<Item> getAllItems();

    void updateItem(Item item);


    void deleteItem(String itemId);

    void insertItem(Item item);
}
