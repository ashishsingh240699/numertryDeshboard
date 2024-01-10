package com.exam.services;

import com.exam.payload.QueryDto;

import java.util.List;

public interface QueryService {
    QueryDto addQuery(QueryDto queryDto);

    List<QueryDto> getAllQuery();
}
