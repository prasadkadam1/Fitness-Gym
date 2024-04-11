import * as React from 'react';
import DisabledAccordion from './scheduleCards/DisabledAccordion';
import AboutFooter from './enquiry/AboutFooter';
export default function Schedule() {
  return (
    <div className='h-[89.5vh] w-[84vw] overflow-y-scroll   bg-black'>
      <div className='flex flex-wrap'>
        <DisabledAccordion></DisabledAccordion>
      </div>
      <AboutFooter></AboutFooter>
    </div>
  );
}









