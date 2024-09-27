import React from "react";


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


      <div className="pcontainer">
        <div className="Mname">
        <div class="cardp" id="cardp">
          <div class="contentp">
            <img
              src="images/poster1.jpg"
              alt=""
              style={{
                width: "186px",
                height:"250px"
              }}
            />
          </div>
        </div>
        <h2>Meharbaan </h2>
        <p>(Romantic)</p>
        <p>Hindi feature film</p>
        </div>
        

        <div className="Mname">
        <div class="cardp" id="cardp">
          <div class="contentp">
          <img
              src="images/poster2.jpg"
              alt=""
              style={{
                width: "186px",
                height:"250px"
              }}
            />
          </div>
        </div>
        <h2>Meharbaan </h2>
        <p>(Romantic)</p>
        <p>Hindi feature film</p>
        </div>

<div className="Mname">
        <div class="cardp" id="cardp">
          <div class="contentp">
          <img
              src="images/proimg1.jpg"
              alt=""
              style={{
               height:"250px"
              }}
            />


          </div>
        </div>
        <h2>Meharbaan </h2>
        <p>(Romantic)</p>
        <p>Hindi feature film</p>
        
        </div>
       
   <div className="Mname">        <div class="cardp" id="cardp">
          <div class="contentp">
          <img
              src="images/proimg3.jpg"
              alt=""
              style={{
                height:"250px"
              }}
            />
          </div>
        </div>
        <h2>Meharbaan </h2>
        <p>(Romantic)</p>
        <p>Hindi feature film</p>
        </div>

         
         <div className="Mname">
        <div class="cardp" id="cardp">
          <div class="contentp">
          <img
              src="images/proimg4.jpg"
              alt=""
              style={{
                height:"250px"
              }}
            />
          </div>
        </div>
        <h2>Meharbaan </h2>
        <p>(Romantic)</p>
        <p>Hindi feature film</p>

        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Projects;
