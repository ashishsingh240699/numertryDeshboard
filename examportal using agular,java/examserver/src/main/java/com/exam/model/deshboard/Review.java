package com.exam.model.deshboard;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Reviews")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String review_For;
    private String course;
    private String overall_Rating;
    private String is_publish;
    private Date review_date;
}
