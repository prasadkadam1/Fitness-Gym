import React from 'react'
import c1 from "../../../assets/images/2147827948.jpg"
import c2 from "../../../assets/images/2149326107.jpg"
import c3 from "../../../assets/images/442.jpg"
import c5 from "../../../assets/images/5004.jpg"
import c4 from "../../../assets/images/interior-illuminated-fitness-club.jpg"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import { green } from '@mui/material/colors';
const CarouselAbout = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));
  const ColorButtongreen = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">



          <div className="carousel-item active flex text-white h-[56vh]">
            <div className='w-[42.8vw] p-[3vw]'>
              <div className='m-2'>Fitness Gym <span className='text-green-500 h-[56vh] text-3xl font-bold'>play</span></div>
              <ul>
                <li className='m-2'>Unlimited access to multiple sports across all centers</li>
                <li className='m-2'>Badminton, Swimming & other sports</li>
                <li className='m-2'>Guaranteed playing partner</li>
                <li className='m-2'>Guided sessions with expert coaches</li>
              </ul>
              <div className='m-2'>Starting at ₹916 / month</div>
              <div className='m-2 inline-block'>
                <ColorButton variant="contained" className='m-2'>TRY FOR FREE</ColorButton>
              </div>
              <div className='m-2 inline-block'>
                <ColorButtongreen variant="contained" className='m-2'>BUY NOW</ColorButtongreen>
              </div>
            </div>
            <img src={c5} className="d-block w-[40vw]" alt="..." />
          </div>



          <div className="carousel-item active flex text-white h-[56vh]">
            <img src={c1} className="d-block w-[40vw]" alt="..." />

            <div className='w-[42.8vw] p-[3vw]'>
              <div className='m-2'>Fitness Gym <span className='text-red-500 h-[56vh] text-3xl font-bold'>Fitness Essentials-Women</span></div>
              <ul>
                <li className='m-2'>Unlimited access to multiple sports across all centers</li>
                <li className='m-2'>Badminton, Swimming & other sports</li>
                <li className='m-2'>Guaranteed playing partner</li>
                <li className='m-2'>Guided sessions with expert coaches</li>
              </ul>
              <div className='m-2'>Starting at ₹916 / month</div>
              <div className='m-2 inline-block'>
                <ColorButton variant="contained" className='m-2'>TRY FOR FREE</ColorButton>
              </div>
              <div className='m-2 inline-block'>
                <ColorButtongreen variant="contained" className='m-2'>BUY NOW</ColorButtongreen>
              </div>
            </div>
            {/* <img src={c5} className="d-block w-[40vw]" alt="..." /> */}
          </div>





          <div className="carousel-item active flex text-white h-[56vh]">
            {/* <img src={c1} className="d-block w-[40vw]" alt="..." /> */}

            <div className='w-[42.8vw] p-[3vw]'>
              <div className='m-2'>Fitness Gym <span className='text-blue-500 h-[56vh] text-3xl font-bold'>Beat the Stress</span></div>
              <ul>
                <li className='m-2'>Unlimited access to multiple sports across all centers</li>
                <li className='m-2'>Badminton, Swimming & other sports</li>
                <li className='m-2'>Guaranteed playing partner</li>
                <li className='m-2'>Guided sessions with expert coaches</li>
              </ul>
              <div className='m-2'>Starting at ₹916 / month</div>
              <div className='m-2 inline-block'>
                <ColorButton variant="contained" className='m-2'>TRY FOR FREE</ColorButton>
              </div>
              <div className='m-2 inline-block'>
                <ColorButtongreen variant="contained" className='m-2'>BUY NOW</ColorButtongreen>
              </div>
            </div>
            <img src={c3} className="d-block w-[40vw]" alt="..." />
          </div>





          <div className="carousel-item active flex text-white h-[56vh]">
            <img src={c2} className="d-block w-[40vw]" alt="..." />

            <div className='w-[42.8vw] p-[3vw]'>
              <div className='m-2'>Fitness Gym <span className='text-amber-700 h-[56vh] text-3xl font-bold'>Dance Fitness Extreme</span></div>
              <ul>
                <li className='m-2'>Unlimited access to multiple sports across all centers</li>
                <li className='m-2'>Badminton, Swimming & other sports</li>
                <li className='m-2'>Guaranteed playing partner</li>
                <li className='m-2'>Guided sessions with expert coaches</li>
              </ul>
              <div className='m-2'>Starting at ₹916 / month</div>
              <div className='m-2 inline-block'>
                <ColorButton variant="contained" className='m-2'>TRY FOR FREE</ColorButton>
              </div>
              <div className='m-2 inline-block'>
                <ColorButtongreen variant="contained" className='m-2'>BUY NOW</ColorButtongreen>
              </div>
            </div>
            {/* <img src={c5} className="d-block w-[40vw]" alt="..." /> */}
          </div>





          <div className="carousel-item active flex text-white h-[56vh]">
            {/* <img src={c1} className="d-block w-[40vw]" alt="..." /> */}

            <div className='w-[42.8vw] p-[3vw]'>
              <div className='m-2'>Fitness Gym <span className='text-orange-500 h-[56vh] text-3xl font-bold'>Cardio Hitt.</span></div>
              <ul>
                <li className='m-2'>Unlimited access to multiple sports across all centers</li>
                <li className='m-2'>Badminton, Swimming & other sports</li>
                <li className='m-2'>Guaranteed playing partner</li>
                <li className='m-2'>Guided sessions with expert coaches</li>
              </ul>
              <div className='m-2'>Starting at ₹916 / month</div>
              <div className='m-2 inline-block'>
                <ColorButton variant="contained" className='m-2'>TRY FOR FREE</ColorButton>
              </div>
              <div className='m-2 inline-block'>
                <ColorButtongreen variant="contained" className='m-2'>BUY NOW</ColorButtongreen>
              </div>
            </div>
            <img src={c4} className="d-block w-[40vw]" alt="..." />
          </div>

        </div>
      </div>
    </div>
  )
}

export default CarouselAbout





// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import { ExampleCarouselImage } from 'components/ExampleCarouselImage';

// function CarouselAbout() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselAbout;