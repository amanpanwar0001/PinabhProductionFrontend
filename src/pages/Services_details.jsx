import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data'
import './service_details.css'
import Footer from "./Footer";
// import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';



const Services_details = () => {

      const { id } = useParams()
      console.log(useParams())
      const serviceDetail = items.filter((data)=> data.id == id )
      if(!serviceDetail){
        return <p>Services not found</p>
      }
      console.log(serviceDetail)

  return (
    <>

{/* <img
        src="/src/images/simg2.jpg"
        alt="img"
        style={{
          opacity: "30%",
          height: "100vh",
          width: "100vw",
          position: "fixed",
        }}
      /> */}



    {/* <Navbar /> */}
    < div className="containerZ">
      {/* <h1>{serviceDetail[0].description}</h1> */}
      <h1>{serviceDetail[0].title}</h1>
       <div className="description">
        <h2 style={{color:"red"}}>{serviceDetail[0].headdescription}</h2>
        <h4>{serviceDetail[0].title1}</h4>
        <p>{serviceDetail[0].subtitle1}</p>
        <h4>{serviceDetail[0].title2}</h4>
        <p>{serviceDetail[0].subtitle2}</p>
        <h4>{serviceDetail[0].title3}</h4>
        <p>{serviceDetail[0].subtitle3}</p>
        <h4>{serviceDetail[0].title4}</h4>
        <p>{serviceDetail[0].subtitle4}</p>
        <h4>{serviceDetail[0].title5}</h4>
        <p>{serviceDetail[0].subtitle5}</p>
        <h4>{serviceDetail[0].title6}</h4>
        <p>{serviceDetail[0].subtitle6}</p>
        <h4>{serviceDetail[0].title7}</h4>
        <p>{serviceDetail[0].subtitle7}</p>
        <h4>{serviceDetail[0].title8}</h4>
        <p>{serviceDetail[0].subtitle8}</p>
        <Link to ='/contact'>
        <button id="AB">Lets connect...!</button></Link>
        </div>
    
      </div>
    <Footer/>
    </>
  )
}

export default Services_details