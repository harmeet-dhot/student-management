package com.studentManagement.repository;

import com.studentManagement.models.Result;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result,String> {
    @Query(value = "SELECT * FROM result u WHERE u.student_name = :studentName",
            nativeQuery = true)
    List<Result> getResultsByStudentName(@Param("studentName") String studentName);
    @Query(value = "SELECT * FROM result u WHERE u.course_name = :courseName",
            nativeQuery = true)
    List<Result> getResultsByCourseName(@Param("courseName") String courseName);
}
