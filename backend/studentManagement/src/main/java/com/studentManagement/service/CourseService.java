package com.studentManagement.service;

import com.studentManagement.models.Course;
import java.util.List;

public interface CourseService {
    Course getCourseById(String courseId);
    Course addNewCourse(Course course);
    List<Course> getAllCourses();
    String deleteCourse(String courseId);
}
