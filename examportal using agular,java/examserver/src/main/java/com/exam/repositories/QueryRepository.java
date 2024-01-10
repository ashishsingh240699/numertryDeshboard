package com.exam.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.model.deshboard.Query;


public interface QueryRepository extends JpaRepository<Query,Long> {
}
