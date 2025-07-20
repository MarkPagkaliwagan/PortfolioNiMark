import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import LoadingScreen from './components/LoadingScreen'; // ✅ Added this line

import { FolderGit2, BadgeCheck, Mail } from 'lucide-react';
import './index.css';

function App() {
  const [loaded, setLoaded] = useState(false); // ✅ Loading state

  return (
    <>
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      {loaded && (
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
      )}
    </>
  );
}

export default App;
