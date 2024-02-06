import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    // eslint-disable-next-line
    watch,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8080/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("New Course Added");
        // navigate to home page
        navigate("/course", { state: { from: { pathname: "/add" } } });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              fullWidth
              id="coursename"
              label="Course Name"
              {...register("courseName")}
            />
          </div>
          <div>
            <Button variant="contained" type="submit">
              Add Course
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default AddCourse;
