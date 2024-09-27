// Header.jsx
import React from 'react';
import './Herosection.css'

const Herosection = () => {
  return (
    <React.Fragment>
      <div className='line_animate'>
        <div className='line'>
          &nbsp;
        </div>
      </div>
      <div className=" py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="display-3 text-red animated slideInLeft " style={{
                  fontSize:"40px",
                  color:"red",
                  fontWeight:"bold"
            
              }}>
              Welcome to Pinabh Production House
              </h2>
              <p className="text-white animated slideInLeft mb-4 pb-2">
              At Pinabh Production, we don't just make films, web series, or TV shows — we craft experiences. From compelling dramas to thrilling mysteries and heartwarming tales, our productions are designed to touch hearts and spark imaginations. Whether you're a budding filmmaker, a curious viewer, or an industry professional, there's something here for you. Explore our world of innovation, where each project is a new adventure and every story has the power to inspire. Join us as we redefine entertainment, one frame at a time. Your next favorite series or film is just a click away!
              </p>
            
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
                <a href="videos/youtube-video.mp4" className="glightbox pulsating-play-btn"></a>
              </div>
          </div>
        </div>
      </div>
      <div className='second' style={{display:"flex",gap:"50px",flexWrap:"wrap",justifyContent:"center"}}>
            <div className="graph"style={{width:"50vw",textAlign:"center",padding:"30px"}}>
            <h3 style={{color:"red",textAlign:"center"}}>Welcome to the world of endless storytelling!
            </h3>
                  <p> At Pinabh Production House, we are passionate about bringing stories to life. Whether you're a film enthusiast, a web series buff, or someone who loves TV dramas, you've come to the right place. </p>
                  <ul>
              <li>
                <span style={{color:"white"}}>Our team is dedicated to creating high-quality content that captivates audiences worldwide. Dive into our latest projects,</span>
              </li>
              <li>
                 <span style={{color:"white"}}> Explore behind-the-scenes magic,</span>
              </li>
              <li>
             <span style={{color:"white"}}>join us on a creative journey where imagination knows no bounds. Ready to be a part of something extraordinary? Whether you're looking to collaborate, get inspired,</span>
              </li>
            </ul>
           
            </div>
            <div className="photo" style={{display:"flex",justifyContent:"center"}}>
                  <img src="images/img2.jpg" alt="" style={{height:"auto",width:"400px"}}/>
            </div>

      </div>
    </React.Fragment>
  );
};

export default Herosection;
