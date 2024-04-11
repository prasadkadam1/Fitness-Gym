// Footer.js
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
// import logo from './logo.svg'; // Import your logo here
import { useSelector } from 'react-redux';

const AboutFooter = () => {
  let about = useSelector(state => state.first.about);
  let gymLogo = about.gymLogo
  return (
    <div className='w-[82.7vw]'>

      <footer className="bg-black text-white pt-12 w-[100%]">
        <div className="container mx-auto flex flex-col items-center py-10">
          <img src={about.gymLogo} alt="Gym Logo" className="w-24 mb-8 " />
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">{about.gymName}</p>
            <p className="mb-2">{about.address}</p>
            <p className="mb-2">{about.phoneNumber}</p>
            <p className="mb-2">{about.emailId}</p>
            <p className="mb-2">{about.openingHours}</p>
            <p className="mb-4">{about.ownerDetails.name} - {about.ownerDetails.designation}</p>
            <p className="mb-4">{about.description}</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="transition duration-300 transform hover:scale-110"><FaFacebook size={36} /></a>
            <a href="#" className="transition duration-300 transform hover:scale-110"><FaLinkedin size={36} /></a>
            <a href="#" className="transition duration-300 transform hover:scale-110"><FaInstagram size={36} /></a>
            <a href="#" className="transition duration-300 transform hover:scale-110"><FaTwitter size={36} /></a>
            <a href="#" className="transition duration-300 transform hover:scale-110"><FaWhatsapp size={36} /></a>
          </div>
          <p className="mt-8 text-sm">© {new Date().getFullYear()} {about.gymName}. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default AboutFooter;
