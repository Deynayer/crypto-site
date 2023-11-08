import React from 'react';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import { AboutUs, FindUs, Jobs, Networks,Home } from './pages';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './container';
import './App.css';

const App = () => {
  return (
    <div>
      <div>
    <Router>
         <Navbar /> 
          <Routes>
            <Route path="/"exact Component={Home} /> 
            <Route path="/Networks"exact Component={Networks} />
            <Route path="/AboutUs" exact Component={AboutUs} />
            <Route path="/Jobs" exact Component={Jobs} />
            <Route path="/FindUs" exact Component={FindUs} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </div>
  );
 
 }; 

export default App;
