package com.example.jpetstore_sb.mapper;

import com.example.jpetstore_sb.model.Sequence;

public interface SequenceMapper {

    // 得到序列
    Sequence getSequence(Sequence sequence);

    // 更新序列
    boolean updateSequence(Sequence sequence);
}
