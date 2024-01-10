package com.exam.payload;

import lombok.Data;

@Data
public class QueryDto {
    private long id;
    private String name;
    private String queryField;

}
