import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const MainBody = () => {
  return (
    <div className='flex'>
      {/* <Navbar></Navbar> */}
      {/* <Link to="/home/mainbody/about">About</Link> */}
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  )
}

export default MainBody