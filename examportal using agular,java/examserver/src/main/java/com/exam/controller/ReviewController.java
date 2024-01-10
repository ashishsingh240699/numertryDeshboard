package com.exam.controller;

import com.exam.payload.BankDto;
import com.exam.payload.ReviewDto;
import com.exam.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/")
    public ResponseEntity<ReviewDto> createReview(@RequestBody ReviewDto reviewDto) {
        return new ResponseEntity<>(reviewService.createReview(reviewDto), HttpStatus.CREATED);
    }
    @GetMapping("/get")
    public List<ReviewDto> getAllReview(){
        return reviewService.getAllReview();
    }
    @GetMapping("/{id}")
    public ResponseEntity<ReviewDto> getReviewById(@PathVariable(name = "id") long id){

        return ResponseEntity.ok(reviewService.getReviewById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReview(@PathVariable(name = "id") long id){
        reviewService.deleteReviewById(id);
        return new ResponseEntity<>("Review entity deleted successfully.", HttpStatus.OK);
    }
    @PutMapping("update/{id}")
    public ResponseEntity<ReviewDto> updateReview(@RequestBody ReviewDto reviewDto, @PathVariable long id){
        ReviewDto reviewResponse = reviewService.updateReview(reviewDto, id);

        return new ResponseEntity<>(reviewResponse, HttpStatus.OK);
    }


}
