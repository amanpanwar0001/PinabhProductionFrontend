import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./Services.css";
import Footer from "./Footer";
import { items } from "./data";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Services = () => {
  
  return (
    <>
    {/* <Navbar /> */}
      <img
        src="images/simg2.jpg"
        alt=""
        style={{
          opacity: "40%",
          height: "100vh",
          width: "100vw",
          position: "fixed",
        }}
      />

      <div
        style={{
          paddingTop: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "150px",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100bh",
          backgroundColor: "black",
        }}
      >
        {items.map((data) => (
          <div key={data.id}>
            <Link to={`/service/${data.id}`}>
              <div className="card text-center border-0  rounded-0 p-4">
                <div className="card-body">
                  <div className="i">
                    <p className="card-title fw-bold  ">
                      {data.title}
                    </p>
                  </div>
                  <p className="card-tex ">
                    {data.smallDescription}
                  </p>
                </div>
        <div
          className="custom-video"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        >
            <img src={data.imagesrc} alt="your browser does not suport image" />

        </div>
        </div>
            </Link>
          </div>
        ))}
      </div>
       <Footer />
    </>
  );
};

export default Services;
