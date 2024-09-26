
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Mediagallery from './Mediagallery';
import { useNavigate } from 'react-router-dom';

const AddImages = () => {
  const [file, setFile] = useState(null);
  const [type, setType] = useState('image');
  const [contentType, setContentType] = useState('');
  const [filename, setFilename] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [media, setMedia] = useState([]);
  const navigate = useNavigate();


  // Fetch media on component mount
  useEffect(() => {
    fetchMedia();
  }, []);

  // Fetch media from the server
  const fetchMedia = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/media');
      setMedia(response.data);
      console.log('image',response.data)
    } catch (error) {
      console.error('Error fetching media:', error);
      setError('Failed to fetch media.');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilename(selectedFile.name);
      setContentType(selectedFile.type);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);
    formData.append('contentType', contentType);
    formData.append('filename', filename);

    try {
      await axios.post('http://localhost:5001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Media uploaded successfully!');
      setError('');
      fetchMedia(); // Refresh the media list after uploading
    } catch (error) {
      console.error('Error uploading media:', error);
      setError('Failed to upload media.');
      setSuccess('');
    }
  };

  // Function to delete media by ID
  const handleDeleteMedia = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/delete/media/${id}`);
      fetchMedia(); // Refresh the media list after deletion
      setSuccess('Media deleted successfully!');
    } catch (error) {
      console.error('Error deleting media:', error);
      setError('Failed to delete media.');
    }
  };
  const handleViewMedia = () => {
    navigate('/mediagallery'); // Navigate to view media page
  };

  return (
    <>
       <div className="m" style={{padding:"100px"}}>     
         <h1 style={{fontSize:"600",color:"red",textAlign:"center"}}>Upload Media</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      <form  style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",marginTop:"20px"}}onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          required
        
        />
        <select style={{fontSize:"500",padding:"10px",marginTop:"20px",borderRadius:"10px"}} value={type} onChange={handleTypeChange}>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        
        <button style={{padding:"10px",backgroundColor:"red",marginTop:"20px",borderRadius:"10px"}} type="submit">Upload</button>
      </form>

      <h2 className='upload' style={{textAlign:"center",color:"red",marginTop:"20px"}}>Uploaded Media</h2>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"50px",marginTop:"50px"}}>
        {media.map((item) => (
          <div key={item._id}>
            {item.type === 'image' ? (
              <img
                src={`http://localhost:5001/api/media/${item._id}`} // Fetching image
                alt={item.filename}
                style={{ width: '200px', height: 'auto' }}
              />
            ) : (
              <video
                src={`http://localhost:5001/api/media/${item._id}`} // Fetching video
                controls
                style={{ width: '200px', height: 'auto' }}
              />
            )}
            <p>{item.filename}</p>
            <button style={{padding:"10px",borderRadius:"10px"}} onClick={() => handleDeleteMedia(item._id)}>Delete</button>
          </div>
          
        ))}
         <div className="viewuploads">
          <button onClick={handleViewMedia} style={{ margin: '20px 0', padding: '10px', cursor: 'pointer', borderRadius:"10px",backgroundColor:"red" }}>
            View Uploaded Media
          </button>
        </div>
      </div>
      </div>

    </>
  
  );
};

export default AddImages;

 