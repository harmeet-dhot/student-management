package com.studentManagement.service;

import com.studentManagement.exception.StudentNotFoundException;
import com.studentManagement.models.Course;
import com.studentManagement.models.Result;
import com.studentManagement.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultServiceImpl implements ResultService{
    @Autowired
    public ResultRepository resultRepository;
    @Override
    public Result addNewResult(Result result) {
        return resultRepository.save(result);
    }
    @Override
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }


    @Override
    public Result getResultById(String resultId) {
        return resultRepository.findById(resultId)
                .orElseThrow(() -> new StudentNotFoundException("can't find any result with id "
                        + resultId));
    }
    @Override
    public List<Result>  getResultsByStudentName(String studentName){
       return resultRepository.getResultsByStudentName(studentName);
    }

    @Override
    public List<Result> getResultsByCourseName(String courseName) {
        return resultRepository.getResultsByCourseName(courseName);
    }

    @Override
    public String deleteResult(Result result) {
        resultRepository.delete(result);
        return "Result deleted successfully";
    }

    @Override
    public String deleteAllResults() {
        resultRepository.deleteAll();
         return "Don't do this ever";
    }
}
