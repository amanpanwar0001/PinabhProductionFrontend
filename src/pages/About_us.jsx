import React from "react";
import "./About.css";
import Footer from "./Footer";

const About_us = () => {
  return (
    <>
      <div className="background-image">
        <div className="top">
          <h2>
            Our <span>Story</span>
          </h2>
        </div>
        <div className="content1">
        <div className="right">
            <img src="images/img1.jpg" alt="" />
          </div>
          <div className="left">
            <p>
              About Us Welcome to Pinabh Production House! Since our inception
              in 2014, Pinabh Production House has been at the forefront of
              Bollywood's vibrant film industry. Based in the heart of Mumbai,
              the epicenter of Indian cinema, we pride ourselves on creating
              compelling and innovative entertainment that resonates with
              audiences around the globe.
              <br></br>
              Our journey began with a vision to produce high-quality films and
              television content that not only entertains but also inspires.
              Over the years, we have built a reputation for excellence,
              blending creativity with professionalism to bring captivating
              stories to the screen. Our diverse portfolio includes everything
              from dramatic features to light-hearted comedies, and we continue
              to push the boundaries of storytelling and production.
            </p>
          </div>
        </div>

        <div className="content2">
          <div className="right2">
            <br />
            <p>
              At Pinabh Production House, we believe that every film is a
              collaborative effort. Our talented team of writers, directors,
              producers, and technical experts work tirelessly to ensure that
              each project is executed with precision and passion. We are
              committed to fostering a creative environment where fresh ideas
              thrive and where innovation is the driving force behind our work.
              <br></br>
              As we look to the future, our commitment remains steadfast: to
              produce exceptional content that entertains, engages, and leaves a
              lasting impact. We invite you to join us on this exciting journey
              and experience the magic of Bollywood through the lens of Pinabh
              Production House.
            </p>
            <br />
          </div>
          <div className="left2">
            <img src="images/img2.jpg" alt="" />
          </div>
        </div>
        <Footer/>
      </div>
      
    </>
  );
};

export default About_us;
