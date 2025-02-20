import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import attendacerecord from '../images/svg/attendacerecord.svg';
import dashicon from '../images/svg/dashicon.svg';
import logouticon from '../images/svg/logouticon.svg';
import reporticon from '../images/svg/reporticon.svg';
import studenticon from '../images/svg/studenticon.svg';

function TeacherDashLeft() {
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
        <div className="flex flex-col p-5 space-y-2">
          <div className="text-[#899bbd] font-semibold text-xs uppercase">Analyze</div>
          <NavLink
            to="/app/teacher/dashboard"
            className={({ isActive }) =>
              `rounded p-3 flex items-center ${isActive ? 'bg-[#f6f9ff] text-[#4154f1] font-bold' : 'text-[#012970]'}`
            }
          >
            <img className="w-6 h-6 mr-3" src={dashicon} alt="Dashboard" />
            Dashboard
          </NavLink>
          <NavLink
            to="/app/teacher/report"
            className={({ isActive }) =>
              `rounded p-3 flex items-center ${isActive ? 'bg-[#f6f9ff] text-[#4154f1] font-bold' : 'text-[#012970]'}`
            }
          >
            <img className="w-6 h-6 mr-3" src={reporticon} alt="Report" />
            Report
          </NavLink>

          <div className="text-[#899bbd] font-semibold text-xs uppercase">Track</div>
          <NavLink
            to="/app/teacher/AttendanceSheets"
            className={({ isActive }) =>
              `rounded p-3 flex items-center ${isActive ? 'bg-[#f6f9ff] text-[#4154f1] font-bold' : 'text-[#012970]'}`
            }
          >
            <img className="w-6 h-6 mr-3" src={attendacerecord} alt="Attendance" />
            Attendance Sheet
          </NavLink>

          <div className="text-[#899bbd] font-semibold text-xs uppercase">Manage</div>
          <NavLink
            to="/app/teacher/students"
            className={({ isActive }) =>
              `rounded p-3 flex items-center ${isActive ? 'bg-[#f6f9ff] text-[#4154f1] font-bold' : 'text-[#012970]'}`
            }
          >
            <img className="w-6 h-6 mr-3" src={studenticon} alt="Students" />
            Student
          </NavLink>

          <div className="text-[#899bbd] font-semibold text-xs uppercase">Logout</div>
          <NavLink
            to="/"
            className="rounded p-3 flex items-center text-[#012970] hover:bg-red-100 hover:text-red-600"
          >
            <img className="w-5 h-5 mr-3" src={logouticon} alt="Logout" />
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default TeacherDashLeft;
