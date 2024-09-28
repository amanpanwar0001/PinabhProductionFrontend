import React from "react";
import "./Projects.css";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div>
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
      <div className="hed">
      <h3 className='ru3'> <a href="">Our Upcoming Projects</a> </h3>
      </div>

      <div className="pcontainer">
        <div className="Mname">
          <div class="cardp" id="cardp">
            <div class="contentp">
              <img src="images/poster1.jpg" alt="" />
            </div>
          </div>
          <div className="cen">
          <h2 style={{color:"red"}}>Meharbaan </h2>
          <p>(Romantic)</p>
          <p>Hindi feature film</p>
          </div>
        </div>

        <div className="Mname">
          <div class="cardp" id="cardp">
            <div class="contentp">
              <img src="images/poster2.jpg" alt="" />
            </div>
          </div>
           <div className="cen">
          <h2 style={{color:"red"}}>Baat Ban Jaye</h2>
          <p>(RomCom)</p>
          <p>Hindi feature film</p>
          </div>
        </div>

        <div className="Mname">
          <div class="cardp" id="cardp">
            <div class="contentp">
              <img src="images/pyasa.jpg" alt="" />
            </div>
          </div>
           <div className="cen">
          <h2 style={{color:"red"}}>Pyasa</h2>
          <p>(Thriller)</p>
          <p>Webseries</p>
          </div>
        </div>

        <div className="Mname">
          {" "}
          <div class="cardp" id="cardp">
            <div class="contentp">
              <img src="images/three_roses.jpg" alt="" />
            </div>
          </div>
           <div className="cen">
          <h2 style={{color:"red"}}>Three Roses</h2>
          <p>(Romantic)</p>
          <p>Album</p>
          </div>
        </div>

        <div className="Mname">
          <div class="cardp" id="cardp">
            <div class="contentp">
              <img src="images/jai_laxmi_ma.jpg" alt="" />
            </div>
          </div>
           <div className="cen">
          <h2 style={{color:"red"}}>Jai Laxmi Ma</h2>
          <p>(Devotional)</p>
          <p>Hindi feature film</p>
          </div>
        </div>
      </div>
      <div className="hed1">
      <h3 className='ru3'> <a href="">Third Party Projects</a> </h3>
      </div>
      <div className="ft">
      <div class="cardp" id="cardp">
            <div class="contentp">
              <p style={{color:"red"}}>Upcoming...</p>
            </div>
          </div>
          <div class="cardp" id="cardp">
            <div class="contentp">
            <p style={{color:"red"}}>Upcoming...</p>

            </div>
          </div>
          </div>
      <Footer/>
    </div>
  );
};

export default Projects;
