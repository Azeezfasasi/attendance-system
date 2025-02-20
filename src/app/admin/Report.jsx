import React from 'react';
import { Helmet } from 'react-helmet';
import AdminHeader from '../../assets/component/AdminHeader';
import AdminDashLeft from '../../assets/component/AdminDashLeft';

function AdminReport() {
  return (
    <>
    <Helmet>
        <title>Report | Attendance System</title>
    </Helmet>
    <AdminHeader />
    <AdminDashLeft />
    </>
  )
}

export default AdminReport;