package com.exam.controller;

import com.exam.payload.BankDto;
import com.exam.payload.QueryDto;
import com.exam.services.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/query")
public class QueryController {
    @Autowired
    private QueryService queryService;
    @PostMapping("/")
    public ResponseEntity<QueryDto>createQuery(@RequestBody QueryDto queryDto){
        QueryDto queryDt = queryService.addQuery(queryDto);
        return new ResponseEntity<>(queryDt, HttpStatus.CREATED);

    }
    @GetMapping("/get")
    public List<QueryDto> getAllQuery(){
        return queryService.getAllQuery();
    }
}
