import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
const AddStudent = () => {

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
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("New Student Added");
        // navigate to home page
        navigate("/student", { state: { from: { pathname: "/add" } } });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Add Student</h1>
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
              id="firstname"
              label="First Name"
              {...register("firstName")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="lastname"
              label="Family Name"
              {...register("familyName")}
            />
          </div>
          <div>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              {...register("email")}
              type={"email"}
            />
          </div>
          <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Controller
          name={"dob"}
          control={control}
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => {
            return (
              <DatePicker
                onChange={onChange}
                selected={value}
                placeholderText="Enter your birth date"
              />
            );
          }}
        />
        </LocalizationProvider>
          </div>
          <div>
            <Button variant="contained" type="submit">
              Add Student
            </Button>
          </div>
        </Box>
      </form>
    </>
  );
};

export default AddStudent;
