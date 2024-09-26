import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about_section.css'

const About_section2 = () => {
  return (
    <>
    
    <section id="about" className="about section" style={{
      paddingTop:"50px"
    }}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src="images/img2.jpg"
              className="img-fluid about-img"
              alt=""
            />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>Welcome to the world of endless storytelling!
            </h3>
            <p className="fst-italic">
            At Pinabh Production House, we are passionate about bringing stories to life. Whether you're a film enthusiast, a web series buff, or someone who loves TV dramas, you've come to the right place. 
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i> <span>Our team is dedicated to creating high-quality content that captivates audiences worldwide. Dive into our latest projects,</span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i> <span> explore behind-the-scenes magic,</span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i> <span>and join us on a creative journey where imagination knows no bounds. Ready to be a part of something extraordinary? Whether you're looking to collaborate, get inspired,</span>
              </li>
            </ul>
            <p>
              or simply enjoy the finest in entertainment, we invite you to explore our productions and become a part of the  Pinabh Production.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About_section2;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './about_section.css'

// const About_section2 = () => {
//   return (
//     <>
//     <section id="about" className="about section">
//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row gy-4">
//           <div className="col-lg-6 order-1 order-lg-2">
//             <img
//               src="images/img2.jpg"
//               className="img-fluid about-img"
//               alt="About Us"
//             />
//           </div>
//           <div className="col-lg-6 order-2 order-lg-1 content">
//             <h3>Welcome to the world of endless storytelling!</h3>
//             <p className="fst-italic">
//             At Pinabh Production House, we are passionate about bringing stories to life. Whether you're a film enthusiast, a web series buff, or someone who loves TV dramas, you've come to the right place. 
//             </p>
//             <ul>
//               <li>
//                 <i className="bi bi-check2-all"></i> Our team is dedicated to creating high-quality content that captivates audiences worldwide.
//               </li>
//               <li>
//                 <i className="bi bi-check2-all"></i> Explore behind-the-scenes magic.
//               </li>
//               <li>
//                 <i className="bi bi-check2-all"></i> Join us on a creative journey where imagination knows no bounds.
//               </li>
//             </ul>
//             <p>
//               Whether you're looking to collaborate, get inspired, or simply enjoy the finest entertainment, we invite you to explore our productions and become a part of Pinabh Production.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default About_section2;










