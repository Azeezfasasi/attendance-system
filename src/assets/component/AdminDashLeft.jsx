import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import attendacerecord from '../images/svg/attendacerecord.svg';
import dashicon from '../images/svg/dashicon.svg';
import logouticon from '../images/svg/logouticon.svg';
import reporticon from '../images/svg/reporticon.svg';
import studenticon from '../images/svg/studenticon.svg';

function AdminDashLeft() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {/* Hamburger Button for Mobile */}
    <button
    className="lg:hidden p-4 text-[#012970] fixed top-[60px] left-0 z-50"
    onClick={() => setMenuOpen(!menuOpen)}
    >
    {menuOpen ? <FiX size={30} className='border ml-[240px]' /> : <FiMenu size={30} />}
    </button>

    {/* Sidebar */}
    <div className={`bg-[#ffffff] w-[300px] h-screen fixed top-[60px] lg:top-[0px] left-0 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 shadow-lg lg:relative lg:flex lg:flex-col`}>
        <div className="flex flex-col gap-0 items-start justify-start absolute left-5 top-5">
            <NavLink to="/app/admin/dashboard" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <img
                    className="w-[26px] h-[26px] absolute left-[9px] top-[11px] overflow-visible"
                    src={dashicon}
                />
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Dashboard
                </div>
            </NavLink>
            <div className="text-[#899bbd] text-left font-['OpenSans-SemiBold',_sans-serif] text-[11px] leading-[16.5px] font-semibold uppercase relative flex items-center justify-start">
            ANalyze
            </div>
            <NavLink to="/app/admin/attendance" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <img
                    className="w-[26px] h-[26px] absolute left-[9px] top-[11px] overflow-visible"
                    src=""
                />
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Attendance
                </div>
            </NavLink>
            <NavLink to="/app/admin/absense" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <img
                    className="w-[26px] h-[26px] absolute left-[9px] top-[11px] overflow-visible"
                    src=""
                />
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Absense
                </div>
            </NavLink>
            <NavLink to="/app/admin/report" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Report
                </div>
                <img
                    className="w-[26px] h-[26px] absolute left-2 top-2 overflow-visible"
                    src={reporticon}
                />
            </NavLink>
            <div className="text-[#899bbd] text-left font-['OpenSans-SemiBold',_sans-serif] text-[11px] leading-[16.5px] font-semibold uppercase relative flex items-center justify-start">
            Manage
            </div>
            <NavLink to="/app/admin/teacher" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Teacher
                </div>
                <div className="w-6 h-6 absolute left-2.5 top-2.5 overflow-hidden">
                    <img
                    className="w-[66.67%] h-[83.33%] absolute right-[16.67%] left-[16.67%] bottom-[8.33%] top-[8.33%] overflow-visible"
                    src={attendacerecord}
                    />
                </div>
            </NavLink>
            <NavLink to="/app/admin/students" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Student
                </div>
                <img
                    className="w-[26px] h-[26px] absolute left-2 top-[9px] overflow-visible"
                    src={studenticon}
                />
            </NavLink>
            <NavLink to="/app/admin/subjects" className={({ isActive }) =>
            `rounded w-[260px] h-11 flex relative items-center px-3 ${
              isActive ? "bg-[#c1c1c5] text-[#4154f1] font-bold" : "bg-[#ffffff] text-[#012970]"}`}>
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Subject
                </div>
                <div className="w-6 h-6 absolute left-2.5 top-2.5 overflow-hidden">
                    <img
                    className="w-[66.67%] h-[83.33%] absolute right-[16.67%] left-[16.67%] bottom-[8.33%] top-[8.33%] overflow-visible"
                    src={attendacerecord}
                    />
                </div>
            </NavLink>
            <div className="text-[#899bbd] text-left font-['OpenSans-SemiBold',_sans-serif] text-[11px] leading-[16.5px] font-semibold uppercase relative flex items-center justify-start">
            Chal chla nikal
            </div>
            <NavLink to="/" className="bg-[#ffffff] rounded shrink-0 w-[260px] h-[43px] relative">
                <div className="text-[#012970] text-left font-['OpenSans-SemiBold',_sans-serif] text-[15px] leading-[22.5px] font-semibold absolute left-[41px] top-[10.75px] flex items-center justify-start">
                    Logout
                </div>
                <img
                    className="w-[19px] h-[19px] absolute left-[11px] top-3.5 overflow-visible"
                    src={logouticon}
                />
            </NavLink>
        </div>
    </div>

    </>
  )
}

export default AdminDashLeft;