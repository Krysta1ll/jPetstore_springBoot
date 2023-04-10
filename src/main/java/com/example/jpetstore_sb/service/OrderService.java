package com.example.jpetstore_sb.service;

import com.example.jpetstore_sb.model.Order;

import java.util.List;

public interface OrderService {

    // 插入订单，生成新订单
    public void insertOrder(Order order);

    // 取得订单
    public Order getOrder(int orderId);

    // 通过用户名查看订单
    public List<Order> getOrdersByUsername(String username);

    // 生成订单序列
    public int getNextId(String name) ;

    public List<Order> getAll();
}
