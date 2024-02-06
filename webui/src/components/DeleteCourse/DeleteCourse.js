import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    let abortController = new AbortController();
    fetch(`http://localhost:8080/courses/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        // console.log("New Student Updated");
        // navigate to home page
        navigate("/course", {
          state: { from: { pathname: `/course/delete/${id}` } },
        });
      })
      .catch((err) => console.log(err));

    return () => {
      abortController.abort();
    };
  });
  return(<h1>Course Delete Successfully</h1>);
};

export default DeleteCourse;
