
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About_us from "./pages/About_us";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services_details from "./pages/Services_details";
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import News from "./pages/News";
import NewsList from "./pages/NewsList";
import AddImages from "./pages/AddImages";
import Mediagallery from "./pages/Mediagallery";

function App() {
  return (
    <> 
    <Router>
      <Navbar /> 
      <div className="App">
        <Routes>
          <Route path="/about" element={<About_us />} />
           <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
         <Route path="/project" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/service/:id" element={<Services_details/>}/>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/news" element={<News />} /> 
         <Route path="/newslist" element={<NewsList />} /> 
          <Route path="/addimages" element={<AddImages />} /> 
          <Route path="/mediagallery" element={<Mediagallery />} /> 
        </Routes>
      </div>
    </Router>
    
   
  
    </>
  );
}

export default App;
