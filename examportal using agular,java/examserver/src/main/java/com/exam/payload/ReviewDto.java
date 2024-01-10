package com.exam.payload;

import lombok.*;

import java.util.Date;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto {


    private long id;
    private String review_For;
    private String course;
    private String overall_Rating;
    private String is_publish;
    private Date review_date;
}
