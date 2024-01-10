package com.exam.services;

import com.exam.payload.ReviewDto;

import java.util.List;

public interface ReviewService {





        //create review
        public ReviewDto createReview(ReviewDto reviewDto);


    List<ReviewDto> getAllReview();

    ReviewDto getReviewById(long id);

    void deleteReviewById(long id);

    ReviewDto updateReview(ReviewDto reviewDto, long id);
}
