import React from 'react';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

import { FolderGit2, BadgeCheck, Mail } from 'lucide-react'; // ✅ Icons

import './index.css';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-700 text-black dark:bg-black dark:text-white transition-colors duration-500">
      {/* 🔲 Background Layer */}
      <div className="grid-bg rain-overlay" />

      {/* 🌟 Main Content */}
      <div className="relative z-10">
        <NavBar />
        <Profile />

        <SectionDivider text="My Projects" icon={<FolderGit2 size={12} />} />
        <Project />

        <SectionDivider text="Certificates" icon={<BadgeCheck size={14} />} />
        <Certificate />

        <SectionDivider text="Contact Me" icon={<Mail size={14} />} />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
