import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
// import AddStudent from "../AddStudent/addStudent";

const CourseList = () => {
  const [data, setData] = useState([]);
  // const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:8080/courses")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <h1>All Courses</h1>
      {!loading ? (
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <TableContainer style={{ maxWidth: `900px` }} component={Paper}>
            <Table style={{ width: `100%` }} aria-label="student table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Course Name</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((course) => (
                  <TableRow
                    key={course.courseId}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{course.courseName}</TableCell>
                    <TableCell align="center">
                      <Link to={`/course/delete/${course.courseId}`}>
                        <Button variant="contained" color="error">Delete</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default CourseList;
