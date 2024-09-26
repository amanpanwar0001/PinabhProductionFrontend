import React, { useState, useEffect } from "react";
import axios from "axios";
import './mediagallery.css'
// import "./Videolist.css";

const Mediagallery = () => {
  const [media, setMedia] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch media on component mount
  useEffect(() => {
    fetchMedia();
  }, []);

  // Fetch media from the server
  const fetchMedia = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/media");
      setMedia(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
      setError("Failed to fetch media.");
    }
  };

  return (
    <>
      <h3 className="ru1">
        <a href="">Uploaded Media</a>
      </h3>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
      <div
        className="image-video"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"center",
          margin:"auto",
          width:"80vw",
          gap: "20px",
          border: "1px solid white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        {media.map((item) => (
          <div key={item._id}>
            {item.type === "image" ? (
              <img
                src={`http://localhost:5001/api/media/${item._id}`} // Fetching image
                alt={item.filename}
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid white",
                }}
              />
            ) : (
              <video
                src={`http://localhost:5001/api/media/${item._id}`} // Fetching video
                controls
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid white",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Mediagallery;
