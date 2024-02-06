package com.studentManagement.controller;

import com.studentManagement.models.Result;
import com.studentManagement.models.Student;
import com.studentManagement.repository.ResultRepository;
import com.studentManagement.service.ResultService;
import com.studentManagement.service.StudentService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentControllor {

    @Autowired
    private StudentService studentService;
    @Autowired
    private ResultService resultService;

    @GetMapping("/{studentId}")
    private ResponseEntity<Student> getStudentById(@PathVariable String studentId) {
        return new ResponseEntity<Student>(studentService.getStudentById(studentId), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Student> addNewStudent(@Valid @RequestBody Student student) {
        student.setFullName(student.getFirstName()+" "+student.getFamilyName());
        return new ResponseEntity<Student>(studentService.addNewStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<List<Student>> getAllStudent() {
        return new ResponseEntity<List<Student>>(studentService.getAllStudent(), HttpStatus.OK);
    }
    @DeleteMapping("/{studentId}")
    private ResponseEntity<String> deleteStudent(@PathVariable String studentId) {
        Student student=studentService.getStudentById(studentId);
        String studentName=student.getFirstName()+" "+student.getFamilyName();
        List<Result> results=resultService.getResultsByStudentName(studentName);
        if(results.size()>0) {
            for (Result result : results) {
                resultService.deleteResult(result);
            }
        }
        return new ResponseEntity<String>(studentService.deleteStudent(studentId), HttpStatus.ACCEPTED);
    }
}
