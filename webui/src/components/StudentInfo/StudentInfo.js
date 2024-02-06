import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const StudentInfo = () => {
  const { id } = useParams();

  const [studentData, setStudentData] = useState({});
  // const [isAdding, setIsAdding] = useState(false);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Handled memory leaks using Abort Controller
     */
    let abortController = new AbortController();
    // setLoading(true);
    fetch(`http://localhost:8080/students/${id}`)
      .then((response) => response.json())
      .then((data) => setStudentData(data));
    // setLoading(false);
    return () => {
      abortController.abort();
    };
  });
  return (
    <>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <div style={{ maxWidth: `900px` }}>
          <Card style={{ width: `100%` }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {studentData.firstName} {` `} {studentData.familyName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {studentData.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/">Go Back</Link>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
