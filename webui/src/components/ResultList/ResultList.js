import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
// import AddStudent from "../AddStudent/addStudent";

const ResultList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    setLoading(true);
    fetch("http://localhost:8080/results")
      .then((response) => response.json())
      .then((data) => setData(data)
      );
    setLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <h1>All Results</h1>
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
                  <TableCell align="center">Student Name</TableCell>
                  <TableCell align="center">Course Name</TableCell>
                  <TableCell align="center">Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((result) => (
                  <TableRow
                    key={result.resultId}
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{result.studentName}</TableCell>
                    <TableCell align="center">{result.courseName}</TableCell>
                    <TableCell align="center">{result.grade}</TableCell>
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

export default ResultList;
