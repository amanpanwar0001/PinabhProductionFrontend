import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

// import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" style={{padding:"30px"}}>
      <div className="container bottom_border">
        <div className="row">
          <div className="col-sm-4 col-md col-12">
            <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
            <p className="mb10">
            We are a creative film production company, specializing in captivating stories, engaging videos, and cinematic experiences. Whether you're looking to collaborate or have a project in mind, we’d love to hear from you.
            </p>
            <p>
              <i className="fa fa-location-arrow"></i> 16, Four Bunglows, Andheri West, Mumbai, India
            </p>
            <p>
              <i className="fa fa-phone"></i>  +91-9372539572
            </p>
            <p>
              <i className="fa fa-envelope"></i> info@pinabhfilms.com
            </p>
          </div>

          <div className="col-sm-4 col-md col-6">
            <h5 className="headin5_amrc col_white_amrc pt2">Company</h5>
            <ul className="footer_ul_amrc">
              <li><a href=" ">About PPH</a></li>
              <li><a href=" ">Carrers</a></li>
              <li><a href=" ">Advertising</a></li>
              <li><a href=" ">Help/Faqs</a></li>
              <li><a href=" ">Newsroom</a></li>
              <li><a href=" ">Privacy & Policy</a></li>
              <Link to="/admin">
              <li>Admin Panel</li>
              </Link>
            </ul>
          </div>

          <div className="col-sm-4 col-md col-6">
            <h5 className="headin5_amrc col_white_amrc pt2">Production house</h5>
            <ul className="footer_ul_amrc">
              <li><a href=" ">Editing</a></li>
              <li><a href=" ">Desiging</a></li>
              <li><a href=" ">Projects</a></li>
              <li><a href=" ">Writters</a></li>
              <li><a href=" ">Music and videos</a></li>
              <li><a href=" ">Castings</a></li>
              <li><a href="https://inext-it-solutions-menu.vercel.app/" target='_blank'>Menu</a></li>
            </ul>
          </div>

          <div className=" dj col-sm-4 col-md col-12 logo pt-5">
           <img  src="/images/changeLogo.png" alt="pph img" />
          </div>
        </div>
      </div>

      <div className="containerf" style={{
        padding:'50px'
      }}>
        <ul className="foote_bottom_ul_amrc">
          <li><a href=" ">Home</a></li>
          <li><a href=" ">About</a></li>
          <li><a href=" ">Services</a></li>
          <li><a href=" ">Blog</a></li>
          <li><a href=" ">Contact</a></li>
        </ul>
        <p className="text-center">
          Copyright @2024 |<a href="#"> Pinabh Production House Pvt. Ltd.</a><br />
          Designed By  |<a href="#"> I Next IT Solutions </a>
        </p>

        <ul className="social_footer_ul">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100072473351272">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;