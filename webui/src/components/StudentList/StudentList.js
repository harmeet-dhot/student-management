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

const StudentList = () => {
  const [data, setData] = useState([]);
  // const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((data) => setData(data));
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>All Students</h1>
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
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Date of Birth</TableCell>

                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((student) => (
                  <TableRow
                    key={student.studentId}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{student.firstName}</TableCell>
                    <TableCell align="center">{student.familyName}</TableCell>
                    <TableCell align="center">{student.email}</TableCell>
                    <TableCell align="center">{student.dob}</TableCell>
                    <TableCell align="center">
                      <Link to={`/student/${student.studentId}`}>
                        <Button variant="contained">View</Button>
                      </Link>
                      {` `}
                      {` `}
                      <Link to={`/student/delete/${student.studentId}`}>
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

export default StudentList;
