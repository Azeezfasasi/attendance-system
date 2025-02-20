import React from "react";
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import TeacherLogin from "./TeacherLogin";
import SignUp from "./SignUp";
import TeacherDashboard from "./app/teacher/Dashboard";
import AttendanceSheets from "./app/teacher/AttendanceSheets";
import AdminAttendance from "./app/admin/Attendance";
import AdminReport from "./app/admin/Report";
import Students from "./app/admin/Students";
import Absense from "./app/admin/Absense";
import Teacher from "./app/admin/Teacher";
import Subjects from "./app/admin/Subjects";
import AddTeacher from "./app/admin/AddTeacher";
import AddSubject from "./app/admin/AddSubject";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./app/admin/Dashboard";
import TeacherReport from "./app/teacher/Report";
import TeacherStudents from "./app/teacher/Students";


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/app/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/app/admin/report" element={<AdminReport />} />
          <Route path="/app/admin/students" element={<Students />} />
          <Route path="/app/admin/absense" element={<Absense />} />
          <Route path="/app/admin/attendance" element={<AdminAttendance />} />
          <Route path="/app/admin/subjects" element={<Subjects />} />
          <Route path="/app/admin/teacher" element={<Teacher />} />
          <Route path="/app/admin/addteacher" element={<AddTeacher />} />
          <Route path="/app/admin/addsubject" element={<AddSubject />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* Teacher Routes */}
          <Route path="/" element={<TeacherLogin />} />
          <Route path="/app/signup" element={<SignUp />} />
          <Route path="/app/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/app/teacher/AttendanceSheets" element={<AttendanceSheets />} />
          <Route path="/app/teacher" element={<Teacher />} />
          <Route path="/app/teacher/report" element={<TeacherReport />} />
          <Route path="/app/teacher/students" element={<TeacherStudents />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
