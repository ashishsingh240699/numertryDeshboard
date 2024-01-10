package com.exam.services.impl;



import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.exam.model.deshboard.Review;
import com.exam.payload.ReviewDto;
import com.exam.repositories.ReviewRepository;
import com.exam.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class ReviewImpl implements ReviewService {


    @Autowired
    private ReviewRepository reviewRepository;
    @Override
    public ReviewDto createReview(ReviewDto reviewDto) {
        Review review = mapToEntity(reviewDto);

        review.setReview_date(new Date());
        Review saveReview = reviewRepository.save(review);
        ReviewDto reDto = mapToDto(saveReview);
        return reDto;
    }

    @Override
    public List<ReviewDto> getAllReview() {
        List<Review> allReview = reviewRepository.findAll();
        return allReview.stream().map(review->mapToDto(review)).collect(Collectors.toList());

    }

    @Override
    public ReviewDto getReviewById(long id) {
        Review review = reviewRepository.findById(id).get();

        return mapToDto(review);
    }

    @Override
    public void deleteReviewById(long id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public ReviewDto updateReview(ReviewDto reviewDto, long id) {
        Review review = reviewRepository.findById(id).get();
        review.setReview_For(reviewDto.getReview_For());
        review.setReview_date(reviewDto.getReview_date());
        review.setCourse(reviewDto.getCourse());
        review.setOverall_Rating(reviewDto.getOverall_Rating());
        review.setIs_publish(reviewDto.getIs_publish());
        Review save = reviewRepository.save(review);
        return mapToDto(save);
    }

    private ReviewDto mapToDto(Review review){
        ReviewDto reviewDto = new ReviewDto();
        reviewDto.setId(review.getId());
        reviewDto.setReview_For(review.getReview_For());
        reviewDto.setCourse(review.getCourse());
        reviewDto.setOverall_Rating(review.getOverall_Rating());
        reviewDto.setIs_publish(review.getReview_For());
        reviewDto.setReview_date(review.getReview_date());
        return reviewDto;

    }
    private Review mapToEntity(ReviewDto reviewDto){
        Review review= new Review();
        review.setReview_For(reviewDto.getReview_For());
        review.setCourse(reviewDto.getCourse());
        review.setOverall_Rating(reviewDto.getOverall_Rating());
        review.setIs_publish(reviewDto.getIs_publish());
        review.setReview_date(reviewDto.getReview_date());
        return review;
    }
}
