import React from 'react'
import Sidebar from './../sidebar/Sidebar';
import Navbar from "../navbar/Navbar"
import { Outlet } from 'react-router-dom';
import MainBody from './../body/MainBody';
const Home = () => {
  return (
    <div>


      <Navbar></Navbar>
      {/* <MainBody></MainBody> */}

      <Outlet />
    </div>
  )
}

export default Home