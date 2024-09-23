import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Videolist.css";

const Videolist = () => {
  const [media, setMedia] = useState({ images: [], videos: [] });

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      // Fetch images and videos from the correct endpoints
      const imageResponse = await axios.get(
        "http://localhost:5001/api/media/images"
      );
      const videoResponse = await axios.get(
        "http://localhost:5001/api/media/videos"
      );
      setMedia({ images: imageResponse.data, videos: videoResponse.data });
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  return (
    <>

    <h3 className="rv"> <a href="">Recent Media</a> </h3>
    
    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap:"wrap",
        
        color: "white",
      }}
    >

      
      <ul style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap"
      }} >
        {media.images.map((url, index) => (
          <button class="button">
          <div class="blob1"></div>
          <div class="blob2"></div>
          <div class="inner"> <li key={index}>
                <img 
                  src={url}
                  alt={`Uploaded ${index}`}
                  style={{ height: "30vh",width:"40vw" }}
                />
              </li></div>
        </button>


          /* From Uiverse.io by bhaveshxrawat */
          
             
           
        ))}
      </ul>

      <ul style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
        gap:"30px"
      }}>
        {media.videos.map((url, index) => (

          /* From Uiverse.io by Spacious74 */ 
<button class="button">
  <div class="blob1"></div>
  <div class="blob2"></div>
  <div class="inner"><li style={{
    listStyle:"none"
  }} key={index}>
                <video controls style={{ width: "250px" , height:"250px"  }}>
                  <source src={url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </li></div>
</button>

          
              
           
        ))}
      </ul>
    </div>

    </>
  );
};

export default Videolist;
