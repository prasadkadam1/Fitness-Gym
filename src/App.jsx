import React from 'react'
import LandingPage from './components/landingPage/LandingPage';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-black'>
      <LandingPage></LandingPage>
      {/* <Outlet /> */}
    </div>
  )
}

export default App