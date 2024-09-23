  

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./NewsList.css"

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/news');
      setNewsItems(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

 

  return (
    <>
    <div style={{  color: "white" }}>

      <h3 className='ru'> <a href="">Recent Updates</a> </h3>
      
      {newsItems.length > 0 ? (
        <ul style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"50px",flexWrap:"wrap"}}>
          {newsItems.map(item => (
            <div class="gulab">
            <div class="blob1"></div>
            <div class="blob2"></div>
            <div class="inner" style={{
                width:"70vw",
                
                fontWeight:"bolder"
              }} key={item.id}>
              <h2 >{item.title}</h2>
              <i>{item.content}</i>
            </div>
          </div>
            
            
            
          ))}
        </ul>
      ) : (
        <p>No updates available.</p>
      )}
    </div>
    </>
    
  );
};

export default NewsList;

