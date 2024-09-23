import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./News.css"

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showViewButton, setShowViewButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://pinabh-productionbackend.onrender.com/api/news');
      setNewsItems(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://pinabh-productionbackend.onrender.com/api/news', { title, content });
      setTitle('');
      setContent('');
      setShowViewButton(true);
      fetchNews(); // Refresh the news list after adding
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://pinabh-productionbackend.onrender.com/api/news/${id}`);
      fetchNews(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const handleViewNews = () => {
    navigate('/newslist');
  };

  return (
      <>
    <div className='NewsContainer'>
      <h1>News Management</h1>
      
      <form className="formN" onSubmit={handleSubmit}>
        <input 
          className='inputN'
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          className='inputN'
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
        <button className='btnN' type="submit">Add News</button>
      </form>

      {/* Show the View News button only after adding news */}
      {showViewButton && (
        <button  className='btnN' onClick={handleViewNews} style={{ marginTop: "20px" }}>
          View News
        </button>
      )}

      {/* Display existing news items */}
      
      <h2 >Existing News</h2>
      
      <ul style={{ listStyleType: 'none', padding: 0 ,display:"flex",gap:"50px"  }}>
      
        {newsItems.map((news) => (
          <li className="exist" key={news.id} style={{ marginBottom: '10px', color: 'lightgray' }}>
            <h3>{news.title}</h3>
            <p>{news.content}</p>
            <button  className='btnN' onClick={() => handleDelete(news.id)} style={{ color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      
      </ul>
      
      
    </div>
    </>
  );
};

export default News;
