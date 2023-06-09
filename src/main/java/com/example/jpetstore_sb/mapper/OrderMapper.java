package com.example.jpetstore_sb.mapper;

import com.example.jpetstore_sb.model.Order;

import java.util.List;

public interface OrderMapper {

    // 根据用户名得到订单
    List<Order> getOrdersByUsername(String username);

    // 根据订单ID得到订单
    Order getOrder(int orderId);

    // 插入新订单
    void insertOrder(Order order);

    // 插入新订单状态
    void insertOrderStatus(Order order);

    //获取全部
    List<Order>  getAll();

    void updateOrder(Order order);

    void updateOrderStatus(Order order);
    void deleteOrder(int orderId);
}
