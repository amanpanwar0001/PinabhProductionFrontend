import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <div className="head">
    <h1>Welcome to Admin Dashboard.....!</h1>
    </div>
    <div className="dashboard" >
      <div class="Newsroom " style={{
            padding:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"40px"
      }}>
            <h1 style={{
                  color:"white",
                  textAlign:"center",
                  marginTop:"20px"
            }}>Newsroom</h1>
            <Link to="/news"><button id="bt" style={{
                  padding:"20px",
                  borderRadius:"10px"
            }}>Add News</button></Link>
            
      </div>
      <div class="Moviezone" style={{
            padding:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"40px"
      }}>
      <h1 style={{
                  color:"white",
                  textAlign:"center",
                  marginTop:"20px"

            }}>Movie Zone</h1>
            <Link to="/addimages"><button id="bt" style={{
                  padding:"20px",
                  borderRadius:"10px"
            }}>Add Movies</button></Link>
      
      </div>
      </div></>
  )
}

export default Dashboard