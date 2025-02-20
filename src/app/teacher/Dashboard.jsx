import React from 'react';
import { Helmet } from 'react-helmet';
import TeacherDashHeader from '../../assets/component/TeacherDashHeader';
import TeacherDashLeft from '../../assets/component/TeacherDashLeft';

function TeacherDashboard() {
  return (
    <>
    <Helmet>
      <title>Teacher Dashboard | Attendance System</title>
    </Helmet>
    <TeacherDashHeader />
    <TeacherDashLeft />
    </>
  )
}

export default TeacherDashboard;