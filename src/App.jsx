// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

import './index.css';
  

function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden text-green-100">
      {/* 🔲 Background Layer */}
      <div className="grid-bg rain-overlay" />
      
      {/* 🌟 Main Content */}
      <div className="relative z-10">
        <NavBar />
        <Profile />
        <Project />
        <Certificate />
        <Contact />
      </div>
    </div>
  );
}

export default App; // ← 🔥 IMPORTANT ito!
