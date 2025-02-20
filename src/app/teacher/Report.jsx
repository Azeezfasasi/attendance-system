import React from 'react';
import { Helmet } from 'react-helmet';
import TeacherDashLeft from '../../assets/component/TeacherDashLeft';
import TeacherDashHeader from '../../assets/component/TeacherDashHeader';

function TeacherReport() {
  return (
    <>
    <Helmet>
      <title>Report | Attendance System</title>
    </Helmet>
    <TeacherDashHeader />
    <TeacherDashLeft />
    </>
  )
}

export default TeacherReport;