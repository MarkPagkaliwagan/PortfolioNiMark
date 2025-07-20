import React, { useState, useEffect } from 'react';
import { FolderGit2, BadgeCheck, Mail, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  const navItems = [
    { name: 'Projects', icon: <FolderGit2 size={16} className="mr-2" /> },
    { name: 'Certifications', icon: <BadgeCheck size={16} className="mr-2" /> },
    { name: 'Contact', icon: <Mail size={16} className="mr-2" /> }
  ];

  return (
    <motion.div
      className="w-full px-4 mt-0 flex justify-end sticky top-4 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full flex flex-col sm:flex-row items-center 
                      justify-between gap-4 px-4 py-3 rounded-2xl 
                      bg-black/50 border border-green-400 backdrop-blur-md 
                      shadow-[0_0_15px_#00ff95]">

        {/* Left section: Name and Time+Date */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Name */}
          <motion.div
            className="w-fit px-4 py-2 rounded-lg 
              bg-gradient-to-r from-green-400/20 via-green-600/30 to-green-400/20 
              border border-green-400 shadow-[0_0_10px_#00ff95] 
              backdrop-blur-md flex items-center justify-start gap-2 
              text-green-200 font-mono font-bold tracking-wide text-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-5 h-5 text-green-300 animate-pulse" />
            Mark Jeus M. Pagkaliwagan
          </motion.div>

          {/* Time and Date boxes side by side */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Time box */}
            <motion.div
              className="px-3 py-1 rounded-lg 
                          bg-black border border-green-400 
                          text-green-300 font-mono text-sm shadow-[0_0_8px_#00ff95]
                          backdrop-blur-md tracking-widest"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {formattedTime}
            </motion.div>
            {/* Date box */}
            <motion.div
              className="px-3 py-1 rounded-lg 
                          bg-black border border-green-400 
                          text-green-300 font-mono text-sm shadow-[0_0_8px_#00ff95]
                          backdrop-blur-md tracking-wide"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {formattedDate}
            </motion.div>
          </motion.div>
        </div>

        {/* Nav Items */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center px-3 py-1 rounded-md
                         text-green-300 font-mono text-sm
                         hover:text-green-100 hover:bg-green-400/10
                         transition-all duration-300"
              whileHover={{ scale: 1.1, color: '#ccffcc' }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              {item.icon}
              {item.name}
            </motion.a>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
