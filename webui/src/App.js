import "./App.css";
import StudentList from "./components/StudentList/StudentList";
import CourseList from "./components/CourseList/CourseList"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddStudent from "./components/AddStudent/addStudent";
import AddCourse from  "./components/AddCourse/addCourse";
import AddResult from "./components/AddResult/addResult";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import DeleteStudent from "./components/DeleteStudent/DeleteStudent";
import DeleteCourse from "./components/DeleteCourse/DeleteCourse";
import ResultList from "./components/ResultList/ResultList";
import NavBar from "./components/NavBar/navBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>Student Management System</h1>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<CourseList />} />
          <Route path="/result" element={<ResultList />} />
          <Route path="/student" element={<StudentList  />} />
          <Route path="/addstudent" element={<AddStudent />}/>
          <Route path="/addcourse" element={<AddCourse />}/>
          <Route path="/addresult" element={<AddResult />}/>
          <Route path="/student/:id" element={<StudentInfo />}/>
          <Route path="/student/delete/:id" element={<DeleteStudent />} />
          <Route path="/course/delete/:id" element={<DeleteCourse />} />
      </Routes>
    </div>
  );
}

export default App;
