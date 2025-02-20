import React from 'react'
import { Helmet } from 'react-helmet'
import AdminHeader from '../../assets/component/AdminHeader'
import AdminDashLeft from '../../assets/component/AdminDashLeft'

function Absense() {
  return (
    <>
    <Helmet>
        <title>Absense | Attendance System</title>
    </Helmet>
    <AdminHeader />
    <AdminDashLeft />
    </>
  )
}

export default Absense