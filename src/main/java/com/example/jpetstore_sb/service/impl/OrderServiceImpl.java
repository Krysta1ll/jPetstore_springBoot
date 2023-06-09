package com.example.jpetstore_sb.service.impl;

import com.example.jpetstore_sb.mapper.ItemMapper;
import com.example.jpetstore_sb.mapper.LineItemMapper;
import com.example.jpetstore_sb.mapper.OrderMapper;
import com.example.jpetstore_sb.mapper.SequenceMapper;
import com.example.jpetstore_sb.model.Item;
import com.example.jpetstore_sb.model.LineItem;
import com.example.jpetstore_sb.model.Order;
import com.example.jpetstore_sb.model.Sequence;
import com.example.jpetstore_sb.service.OrderService;
import com.sun.org.apache.xpath.internal.operations.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private SequenceMapper sequenceMapper;

    @Autowired
    private ItemMapper itemMapper;

    @Autowired
    private LineItemMapper lineItemMapper;


    @Override
    public void insertOrder(Order order) {
        order.setOrderId(getNextId("ordernum"));
        for (int i = 0; i < order.getLineItems().size(); i++) {
            LineItem lineItem = (LineItem) order.getLineItems().get(i);
            String itemId = lineItem.getItemId();
            Integer increment = new Integer(lineItem.getQuantity());

            Item item = itemMapper.getItem(itemId);
            item.setQuantity(itemMapper.getInventoryQuantity(itemId));
            lineItem.setItem(item);

            Map<String, Object> param = new HashMap<String, Object>(2);
            param.put("itemId", itemId);
            param.put("increment", increment);

            itemMapper.updateInventoryQuantity(param);
        }

        orderMapper.insertOrder(order);
        orderMapper.insertOrderStatus(order);
        for (int i = 0; i < order.getLineItems().size(); i++) {
            LineItem lineItem = (LineItem) order.getLineItems().get(i);
            lineItem.setOrderId(order.getOrderId());
            lineItemMapper.insertLineItem(lineItem);
        }
    }

    @Override
    public Order getOrder(int orderId) {
        Order order = orderMapper.getOrder(orderId);
        order.setLineItems(lineItemMapper.getLineItemsByOrderId(orderId));

        for (int i = 0; i < order.getLineItems().size(); i++) {
            LineItem lineItem = (LineItem) order.getLineItems().get(i);
            Item item = itemMapper.getItem(lineItem.getItemId());
            item.setQuantity(itemMapper.getInventoryQuantity(lineItem.getItemId()));
            lineItem.setItem(item);
        }

        return order;
    }

    @Override
    public List<Order> getOrdersByUsername(String username) {
        return orderMapper.getOrdersByUsername(username);
    }

    @Override
    public int getNextId(String name) {
        Sequence sequence = new Sequence(name, -1);
        sequence = (Sequence) sequenceMapper.getSequence(sequence);
        if (sequence == null) {
            throw new RuntimeException("Error: A null sequence was returned from the database (could not get next " + name
                    + " sequence).");
        }
        Sequence parameterObject = new Sequence(name, sequence.getNextId() + 1);
        if (sequenceMapper.updateSequence(parameterObject)) {
            return parameterObject.getNextId();
        } else {
            throw new RuntimeException("Can't updateSequence!");
        }
    }

    @Override
    public List<Order> getAll() {
        return orderMapper.getAll();

    }

    @Override
    public void updateOrder(Order order){
        orderMapper.updateOrder(order);
    }

    @Override
    public void updateOrderStatus(Order order){
        orderMapper.updateOrderStatus(order);
    }

    @Override
    public void deleteOrder(int orderId){
        orderMapper.deleteOrder(orderId);
    }

}
