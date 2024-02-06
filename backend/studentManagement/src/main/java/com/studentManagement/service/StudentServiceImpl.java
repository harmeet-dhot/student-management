package com.studentManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.studentManagement.exception.StudentNotFoundException;
import com.studentManagement.models.Student;
import com.studentManagement.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student addNewStudent(Student student) {
        return studentRepository.save(student);
    }
    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }
    @Override
    public Student getStudentById(String studentId) {
        return studentRepository.findById(studentId)
                                .orElseThrow(() -> new StudentNotFoundException("can't find any student with id "
                                                                                + studentId));
    }
	@Override
	public String deleteStudent(String studentId) {
		Student student = studentRepository.findById(studentId)
        .orElseThrow(() -> new StudentNotFoundException("can't find any student with id "
                + studentId));
		studentRepository.delete(student);
		return "Student "+student.getFirstName()+" "+student.getFamilyName()+", successfully deleted from database";
	}
}
