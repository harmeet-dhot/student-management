package com.studentManagement.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String studentId;
    @NotBlank(message = "firstName can't be blank")
    private String firstName;
    @NotBlank(message = "lastname can't be blank")
    private String familyName;
    @Past(message = "date of birth should be in past format")
    @NotNull(message = "date of birth can't be blank")
    private LocalDate dob;
    @Email(message="Not a valid email")
    private String email;
    private String fullName;
}
