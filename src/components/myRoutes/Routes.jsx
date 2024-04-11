import { createBrowserRouter } from "react-router-dom";
import LandingPage from './../landingPage/LandingPage';
import Home from './../home/Home';
import MainBody from './../body/MainBody';
import Navbar from "../navbar/Navbar"
// import { Navbar } from 'react-bootstrap';
import About from './../body/About';
import Sidebar from './../sidebar/Sidebar';
import Contact from "../body/Contact";
import Enquiry from './../body/Enquiry';
// import { Schedule } from "@mui/icons-material";
import Schedule from "../body/Schedule"
import Products from './../body/enquiry/Products';
import Pricing from './../body/enquiry/Pricing';
import Blogs from "../body/enquiry/Blogs";
export let routes = createBrowserRouter([{
  path: "/",
  element: <LandingPage></LandingPage>,
},
{
  path: "/home",
  element: <Home></Home>,
  children: [
    {
      path: "/home/mainbody",
      element: <MainBody></MainBody>,
      children: [
        {
          path: "/home/mainbody",
          element: <About />
        },
        {
          path: "/home/mainbody/contact",
          element: <Contact></Contact>
        },
        {
          path: "/home/mainbody/enquiry",
          element: <Enquiry></Enquiry>
        },

        {
          path: "/home/mainbody/schedule",
          element: <Schedule></Schedule>
        },
        {
          path: "/home/mainbody/products",
          element: <Products></Products>
        },
        {
          path: "/home/mainbody/pricing",
          element: <Pricing></Pricing>
        },
        {
          path: "/home/mainbody/blog",
          element: <Blogs></Blogs>
        }

      ]
    }]
}])


















