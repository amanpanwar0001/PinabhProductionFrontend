import React from "react";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "./Footer";

const Projects = () => {
  const slides = [
    {
      heading: "Meharbaan",
      imgSrc: "images/poster1.jpg",
      para: "Hindi feature film",
      description: "Romantic",
    },
    {
      heading: "Baat Ban jaye",
      imgSrc: "images/poster2.jpg",
      para: "Hindi feature film",
      description: "RomCom",
    },
    {
      heading: "Pyasa",
      imgSrc: "images/proimg3.jpg",
      para: "Web Series",
      description: "Thriller",
    },
    {
      heading: "Three Roses",
      imgSrc: "images/proimg4.jpg",
      para: "Album",
      description: "Romantic",
    },
    {
      heading: "Jai Laxmi Ma",
      imgSrc: "images/proimg5.jpg",
      para: "",
      description: "Devotional",
    },
  ];

  // Settings for react-slick slider
  const settings = {
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 500,
    // autoplaySpeed: 3000,
    // cssEase: "linear",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
     dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",



    responsive: [
      {
        breakpoint: 768, // Adjust according to your needs
        settings: {
          slidesToShow: 1, // Show one slide at a time on mobile
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <img
        src="images/contact1bg.jpg"
        alt=""
        style={{
          opacity: "30%",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          objectFit: "cover",
          
        }}
      />
      <div className="pro">
        <div className="section11">
          <div className="heading11">
            <h1>
              Our <span className="up">Upcoming</span> projects
            </h1>
          </div>
          <div className="slider-container11">
            <Slider {...settings} className="slider11">
              {slides.map((slide, index) => (
                <div className="slide11" key={index}>
                  <div className="content11">
                    <img src={slide.imgSrc} alt={slide.heading} />
                    <h2>{slide.heading}</h2>
                    <i style={{color:"red"}}>{slide.description}</i>
                    <i>{slide.para}</i>


                  </div>
                  <div className="content22">
                    {/* <i>{slide.para}</i>
                    <i>{slide.description}</i> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="head" style={{ textAlign: "center", padding: "40px",fontWeight:"900",marginTop:'50px' }}>
          <h1>Third <span style={{color:"red"}}>Party</span> Projects</h1>
        </div>
        <div
          className="section22"
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="box1"
          >
            <h3
              style={{
                backgroundColor: "red",
                height: "8vh",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                textAlign:"center",
                color:"black",
                padding:"15px"

              }}
            >Upcoming....</h3>
          </div>
          <div
            className="box2"
          >
            <h3
              style={{
                backgroundColor: "red",
                height: "10vh",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                textAlign:"center",
                color:"black",
                padding:"15px"



              }}
            >Upcoming....</h3>
          </div>
        </div>
        <Footer />
        
      </div>
    </>
  );
};

export default Projects;
