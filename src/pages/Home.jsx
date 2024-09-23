 




import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel from React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Home.css'; // Import your custom styles
import About_Section_1 from './About_Section_1';
import About_section2 from './About_section_2';
import Footer from './Footer';
import NewsList from './NewsList';
import Videolist from './Videolist';

const Home = () => {
  return (
    <>
      <div className="carousel-container">
        <Carousel interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/slide1.png"
              alt="Slide 1"
            />
            <Carousel.Caption>
              <h3 className='text'>Capture moments, create legacies.</h3>
              <p>Lights, camera, action – let your imagination take center stage!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/Slide2.jpg"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h3 className='text'>Dream big, film bigger.</h3>
              <p>We take your story and make it unforgettable on screen.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/slide4.jpg"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h3 className='text'>Lights, camera, action</h3>
              <p>Every great film starts with a vision – let’s create yours.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/slide3.jpg"
              alt="Slide 4"
            />
            <Carousel.Caption>
              <h3 className='text'>Where creativity meets professionalism</h3>
              <p>We don’t just produce films, we create experiences.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <About_Section_1 />
      <About_section2 />
      
      <NewsList/>
      <Videolist/>
      

      <Footer />

    </>
  );
};

export default Home;
