import React from 'react'
import { Helmet } from 'react-helmet';
import TeacherDashHeader from '../../assets/component/TeacherDashHeader';
import TeacherDashLeft from '../../assets/component/TeacherDashLeft';

function TeacherStudents() {
  return (
    <>
    <Helmet>
      <title>Students | Attendance System</title>
    </Helmet>
    <TeacherDashHeader />
    <TeacherDashLeft />
    </>
  )
}

export default TeacherStudents;