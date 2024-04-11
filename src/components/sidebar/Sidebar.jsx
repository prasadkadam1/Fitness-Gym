import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
// import Enquiry from './../body/Enquiry';
// import Schedule from './../body/Schedule';
// import About from './../body/About';
import { FaAngleRight } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className='w-[16%] h-[89.5vh] bg-[black] border-r-2 border-gray-900'>
      <div >
        <Link to="/home/mainbody" className='hover:bg-gray-900  flex justify-between'>
          <Button variant="text" sx={{ my: 2, color: 'white', width: "100%" }}>
            <span className='flex items-center w-[70%] justify-between'>
              <span>About</span> <span><FaAngleRight color='white' /></span>
            </span>
          </Button>

        </Link>

      </div>

      <div>
        <Link to="/home/mainbody/enquiry" className='hover:bg-gray-900 py-4'><Button variant="text" sx={{ my: 2, color: 'white', width: "100%" }}>
          <span className='flex items-center w-[70%] justify-between'>
            <span>Enquiry</span> <span><FaAngleRight color='white' /></span>
          </span>
        </Button></Link>
      </div>
      <div>
        <Link to="/home/mainbody/schedule" className='hover:bg-gray-900 py-4'>
          <Button variant="text" sx={{ my: 2, color: 'white', width: "100%" }}>
            <span className='flex items-center w-[70%] justify-between'>
              <span>Diet Schedule</span> <span><FaAngleRight color='white' /></span>
            </span>
          </Button>
        </Link>
      </div>

      <div>
        <Link to="/home/mainbody/contact" className='hover:bg-gray-900 py-4' >
          <Button variant="text" sx={{ my: 2, color: 'white', width: "100%" }}>
            <span className='flex items-center w-[70%] justify-between'>
              <span>Contact</span> <span><FaAngleRight color='white' /></span>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar