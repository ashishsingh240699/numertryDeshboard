package com.exam.services.impl;

import com.exam.model.deshboard.Bank;
import com.exam.model.deshboard.Query;
import com.exam.payload.QueryDto;
import com.exam.repositories.QueryRepository;
import com.exam.services.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuerySeviceImpl implements QueryService {
    @Autowired
    private QueryRepository queryRepository;
    @Override
    public QueryDto addQuery(QueryDto queryDto) {
        Query query = mapToEntity(queryDto);
        Query save = queryRepository.save(query);
        QueryDto queryDto1 = mapToDto(save);
        return queryDto1;
    }

    @Override
    public List<QueryDto> getAllQuery() {
        List<Query> allQuery = queryRepository.findAll();
        return allQuery.stream().map(query -> mapToDto(query)).collect(Collectors.toList());

    }

    private QueryDto mapToDto(Query query){
        QueryDto queryDto = new QueryDto();
        queryDto.setId(query.getId());
        queryDto.setName(query.getName());
        queryDto.setQueryField(query.getQueryField());
return queryDto;
    }
    private Query mapToEntity(QueryDto queryDto){
        Query query = new Query();
        query.setName(queryDto.getName());
        query.setQueryField(queryDto.getQueryField());
        return query;
    }
}
