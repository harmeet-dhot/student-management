package com.studentManagement.service;

import com.studentManagement.models.Student;

import java.util.List;

public interface StudentService {
    Student getStudentById(String studentId);

    Student addNewStudent(Student student);

    List<Student> getAllStudent();

    String deleteStudent(String studentId);
}
