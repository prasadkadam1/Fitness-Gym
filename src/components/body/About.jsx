import React from 'react'
import ScheduleCard from './ScheduleCard';
import FeedbackAbout from './enquiry/FeedbackAbout';
import CarouselAbout from './enquiry/CarouselAbout';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/slice'
// import Footer from './enquiry/AboutFooter';
import AboutFooter from './enquiry/AboutFooter';
const About = () => {
  const about = useSelector((state) => state.first.about)
  console.log(about)
  const dispatch = useDispatch()
  return (

    <div className='h-[89.5vh] w-[84vw] overflow-y-scroll flex flex-wrap bg-black'>

      {/* <button className='text-white'
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button> */}



      <CarouselAbout></CarouselAbout>
      <section className='w-[100%]'>
        {/* <marquee behavior="" direction="right" scrollamount="30" loop className="w-[100%] flex flex-col"  >
          <img src={about.gymLogo} alt="" className='w-[20vw]' />
        </marquee> */}
      </section>

      {/* <h1 className='m-5 mt-10 font-bold text-xl text-white underline'>About Us</h1> */}




      {/* <FeedbackAbout></FeedbackAbout> */}
      <div>
        <div >
          <AboutFooter></AboutFooter> <br />
          {/* <h1 className='m-5 mt-10 font-bold text-xl text-white underline'>Feedbacks</h1> <br /> */}
          {/* <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard /> */}
        </div>
      </div>
    </div>
  )
}

export default About
















