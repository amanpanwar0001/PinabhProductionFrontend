

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './video.css'

const Videos = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploadResult, setUploadResult] = useState('');
  const [error, setError] = useState('');
  const [media, setMedia] = useState({ images: [], videos: [] });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const imageResponse = await axios.get('http://localhost:5001/api/media/images');
      const videoResponse = await axios.get('http://localhost:5001/api/media/videos');
      setMedia({ images: imageResponse.data, videos: videoResponse.data });
    } catch (error) {
      console.error('Error fetching media:', error);
      setError('Failed to fetch media.');
    }
  };

  const handleImageUpload = async () => {
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    try {
      await axios.post('http://localhost:5001/api/upload/image', formData);
      setUploadResult('Image uploaded');
      fetchMedia(); // Refresh the media list
      setImage(null); // Reset the image input
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image.');
    } finally {
      setLoading(false);
    }
  };

  const handleVideoUpload = async () => {
    if (!video) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('video', video);
    try {
      await axios.post('https://pinabh-productionbackend.onrender.com/api/upload/video', formData);
      setUploadResult('Video uploaded');
      fetchMedia(); // Refresh the media list
      setVideo(null); // Reset the video input
    } catch (error) {
      console.error('Error uploading video:', error);
      setError('Failed to upload video.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMedia = async (url) => {
    const isImage = url.includes('/images/');
    const endpoint = isImage ? 'https://pinabh-productionbackend.onrender.com/api/delete/image' : 'https://pinabh-productionbackend.onrender.com/api/delete/video';
  
    console.log("Deleting URL:", url);
    
    try {
      await axios.delete(endpoint, { data: { url } });
      fetchMedia(); // Refresh the media list
    } catch (error) {
      console.error('Error deleting media:', error);
      setError('Failed to delete media.');
    }
  };
  
  const handleViewMedia = () => {
    navigate('/videolist'); // Navigate to view media page
  };

  return (
    <>
    
    

  
    <div className='SET'  >
    <h1>Upload Media</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {uploadResult && <div>{uploadResult}</div>}

      <div className="set">
      <div className="seta">
      <div className="imagesection">
    <input 
        className='inputv'
        type="file" 
        accept="image/*" 
        onChange={(e) => setImage(e.target.files[0])} 
      />
      <button className='btnv' onClick={handleImageUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
    <div className="ulimages">
      <h2>Uploaded Images</h2>
      <ul>
        {media.images.map((url, index) => (
          <li className='setcard' key={index}>
            <img src={url} alt={`Uploaded ${index}`} style={{ width: '200px' }} />
            <button className='btnv' onClick={() => handleDeleteMedia(url)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>

      </div>

      <div className="setb">
      <div className="videosection">
        <input
      className='inputv' 
        type="file" 
        accept="video/*" 
        onChange={(e) => setVideo(e.target.files[0])} 
      />

      <button className='btnv' onClick={handleVideoUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Video'}
      </button>
      
      </div>

      <div className="ulvideos">
      <h2>Uploaded Videos</h2>
      <ul >
        {media.videos.map((url, index) => (
          <li className='setcard' key={index}>
            <video controls style={{ width: '300px' }}>
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className='btnv' onClick={() => handleDeleteMedia(url)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>

      </div>

      
      

      </div>
      <div className="viewuploads">
      <button onClick={handleViewMedia} style={{ margin: '20px 0', padding: '10px', cursor: 'pointer' }}>
        View Uploaded Media
      </button>
      </div>

    
    
      
      
      

      

      
      

      

      
    </div>
    </>
  );
};

export default Videos;



