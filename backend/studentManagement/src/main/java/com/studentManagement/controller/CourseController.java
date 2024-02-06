package com.studentManagement.controller;

import com.studentManagement.models.Course;
import com.studentManagement.models.Result;
import com.studentManagement.models.Student;
import com.studentManagement.service.CourseService;
import com.studentManagement.service.ResultService;
import com.studentManagement.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/courses")
@CrossOrigin("*")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @Autowired
    private ResultService resultService;
    @GetMapping("/{courseId}")
    private ResponseEntity<Course> getStudentById(@PathVariable Course courseId) {
        return new ResponseEntity<Course>(courseService.getCourseById(String.valueOf(courseId)), HttpStatus.OK);
    }
    @PostMapping
    private ResponseEntity<Course> addNewStudent(@Valid @RequestBody Course course) {
        return new ResponseEntity<Course>(courseService.addNewCourse(course), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<List<Course>> getAllStudent() {
        return new ResponseEntity<List<Course>>(courseService.getAllCourses(), HttpStatus.OK);
    }
    @DeleteMapping("/{courseId}")
    private ResponseEntity<String> deleteStudent(@PathVariable String courseId) {
        Course course=courseService.getCourseById(courseId);
        List<Result> results=resultService.getResultsByCourseName(course.getCourseName());
        if(results.size()>0){
            for(Result result:results){
                resultService.deleteResult(result);
            }
        }
        return new ResponseEntity<String>(courseService.deleteCourse(courseId), HttpStatus.ACCEPTED);
    }
}
