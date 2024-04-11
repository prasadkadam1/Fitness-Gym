import React from 'react'
import landingImg from "../../assets/images/landingImg.jpg"
import logo from "../../assets/images/logo.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const LandingPage = () => {
  let navigate = useNavigate()
  let { user, loginWithRedirect, isAuthenticated } = useAuth0()
  let handleClick = (e) => {
    // navigate("/home/mainbody")
    loginWithRedirect()
  }
  // let { isAuthenticated} =useAuth0()
  return (
    <div className='flex'>

      <div>
        <img src={landingImg} alt="Landing Page Image" className='h-[100vh] w-[72vw]' />

      </div>
      <div className='flex flex-col justify-around'>
        <img src={logo} alt="" className='w-[30vw] h-[55vh] ' />
        <div className='flex justify-center'>
          <Button variant="contained" className=' w-[15vw] h-[10vh]' color="success" onClick={(e) => {
            isAuthenticated ? navigate("/home/mainbody") : loginWithRedirect()
          }
          }>{isAuthenticated ? "Start Your Fitness Journy" : "Log In"}</Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage