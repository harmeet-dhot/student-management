package com.studentManagement.service;

import com.studentManagement.exception.StudentNotFoundException;
import com.studentManagement.models.Course;
import com.studentManagement.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course getCourseById(String courseId) {
        return courseRepository.findById(courseId)
                .orElseThrow(() -> new StudentNotFoundException("can't find any course with id "
                        + courseId));
    }
    @Override
    public Course addNewCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
    @Override
    public String deleteCourse(String courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new StudentNotFoundException("can't find any course with id "
                        + courseId));
        courseRepository.delete(course);
        return "Student "+course.getCourseName()+", successfully deleted from database";
    }
}

