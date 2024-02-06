import { Button,Select,FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const AddResult = () => {

  const navigate = useNavigate();
  const[studentList,setStudentList]=useState([]);
  const[courseList,setCourseList]=useState([]);
  const[student,setStudent]=useState('');
  const[course,setCourse]=useState('');
  const[grade,setGrade]=useState('');
  const[loading,setLoading]=useState(true);
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line
    watch,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm();
    useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((data) =>{  
        setStudentList(data)});
    setLoading(false);
  }, []);
  useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:8080/courses")
      .then((response) => response.json())
      .then((data) =>{ 
        setCourseList(data)});
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);
  const onSubmit = (data) => {
      console.log("Form Data",data);
    fetch("http://localhost:8080/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("New Result Added");
        console.log(data);
        // navigate to home page
        navigate("/result", { state: { from: { pathname: "/add" } } });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
     {!loading ?(   
      <form onSubmit={handleSubmit(onSubmit)}>
     <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
        <InputLabel>Select Student</InputLabel>
        <Select style={{minWidth: 150,margin:10}}
          id="studentId"
          label="Student"
          value={student.fullName}
          onChange={(event)=>setStudent(event.target.value)}
          {...register("studentName")}
          required
        >
         {studentList.map((student) => (
				<MenuItem value={student.fullName} key={student.studentId}>
					{student.fullName}
				</MenuItem>
             
		 ))}
        </Select>
        </div>
      <div>
        <InputLabel>Course List</InputLabel>
        <Select style={{minWidth: 150,margin:10}}
        
          id="courseId"
          label="course"
          value={course.courseName}
          onChange={(event)=>setCourse(event.target.value)}
          {...register("courseName")}
          required
        >
         {courseList.map((course) => (
				<MenuItem value={course.courseName} key={course.courseId}>
					{course.courseName}
				</MenuItem>
		 ))}
        </Select>
      </div>
      <InputLabel>Select Grade</InputLabel>
        <Select style={{minWidth: 150,margin:10}}
          id="grade"
          value={grade.value}
          onChange={(event)=>setGrade(event.target.value)}
          {...register("grade")}
          required
        >
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">A</MenuItem>
            <MenuItem value="D">B</MenuItem>
            <MenuItem value="F">A</MenuItem>
        </Select>
      <div>
      </div>
      <div>
            <Button variant="contained" type="submit"style={{minWidth: 150,margin:10}}
            >
              Add Result
            </Button>
          </div>
      </Box>
      </form>
     ):(
         "Loading ..."
     )
    }
    </>
   
  );
};

export default AddResult;
