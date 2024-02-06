package com.studentManagement.service;

import com.studentManagement.models.Course;
import com.studentManagement.models.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultService{
    Result getResultById(String resultId);
    Result addNewResult(Result result);
    List<Result> getAllResults();
    List<Result> getResultsByStudentName(String studentName);
    List<Result> getResultsByCourseName(String courseName);

    String deleteResult(Result result);
    String deleteAllResults();
}
