package com.studentManagement.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    @Id
    @GeneratedValue(strategy= GenerationType.UUID)
    private String resultId;
    @NotBlank(message="Student Id cannot be blank")
    private String studentName;
    @NotBlank(message="Course Id cannot be blank")
    private String courseName;
    @NotBlank(message="Grade cannot be blank")
    private String grade;
}
