import React from 'react'
import ScheduleCard from './ScheduleCard';
import YearlyPackage from './enquiry/YearlyPackage';
import PersonalTrainingEnquiry from './enquiry/PersonalTrainingEnquiry';
import GeneralEnquiry from './enquiry/GeneralEnquiry';
import MaleEnquiry from './enquiry/MaleEnquiry';
import FemaleEnquiry from './enquiry/FemalEnquiry';
import AboutFooter from './enquiry/AboutFooter';

const Enquiry = () => {
  return (
    <div className='h-[89.5vh] w-[84vw] overflow-y-scroll   bg-black'>
      <div className='flex flex-wrap'>

        <div className='m-3 transform  hover:scale(0.5,0.5)'> <YearlyPackage /></div>
        <div className='m-3'><PersonalTrainingEnquiry /></div>
        <div className='m-3'><GeneralEnquiry /></div>
        <div className='m-3'><MaleEnquiry /></div>
        <div className='m-3'><FemaleEnquiry /></div>

      </div>
      <AboutFooter></AboutFooter>
    </div>
  )
}

export default Enquiry