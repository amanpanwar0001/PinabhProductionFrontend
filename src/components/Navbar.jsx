import React from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }
  const handelClose =()=>{
    setIsOpen(false)
  }
  return (
    <>  
      <header>
      <div className="containers">
            <nav>
                  
                  <div className="logo">
                    <div style={{
                      padding:"5px"
                    }}>
                    <img src="images/changeLogo.png" alt="pph" style={{
                    padding:"5px"
                  }} /> 
                    </div>
                   
            <pre className='pinabh'>
              {" "}
              <span className="title">Pinabh</span> <span id='middle'>Production</span>{" "}
              <span className="title">House</span>
            </pre>
            <pre className='pinabh1'>
              {" "}
              <span className="title">P</span> <span id='middle'>P</span>{" "}
              <span className="title">H</span>
            </pre>
                  </div>
                  
                  <ul className={isOpen ? "nav-link active" : "nav-link"}>
                  {/* <button onClick={handelClose} >X</button> */}
                        <li onClick={handelClose} className='icon'><RxCross2 /></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/project'>Project</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                  </ul>
                  <div className="icon" onClick={toggleMenu}>
                  <FaBars />
                  </div>
            </nav>
      </div>
      </header>

    </>
  )
}

export default Navbar
