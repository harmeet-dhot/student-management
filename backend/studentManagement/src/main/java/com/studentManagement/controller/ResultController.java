package com.studentManagement.controller;

import com.studentManagement.models.Result;
import com.studentManagement.models.Student;
import com.studentManagement.service.ResultService;
import com.studentManagement.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/results")
@CrossOrigin("*")
public class ResultController {
    @Autowired
    private ResultService resultService;
    @Autowired
    private StudentService studentService;

    @GetMapping
    private ResponseEntity<List<Result>> getAllResults(){
        return new ResponseEntity<>(resultService.getAllResults(), HttpStatus.OK);
    }
    @PostMapping
    private ResponseEntity<Result> addNewResult(@Valid @RequestBody Result result){
        return new ResponseEntity<>(resultService.addNewResult(result),HttpStatus.CREATED);
    }
    @DeleteMapping("/deleteAll")
    private ResponseEntity<String> deleteAll() {
        return new ResponseEntity<String>(resultService.deleteAllResults(), HttpStatus.ACCEPTED);
    }
}
