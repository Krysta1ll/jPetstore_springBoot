package com.example.jpetstore_sb.mapper;

import com.example.jpetstore_sb.model.Category;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface CategoryMapper {

    // 得到所有商品大类
    List<Category> getCategoryList();

    // 根据货物ID得到商品大类
    Category getCategory(String categoryId);
}
