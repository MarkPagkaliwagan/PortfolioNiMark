import React, { useState, useEffect } from 'react';
import { FolderGit2, BadgeCheck, Mail, Code2, FileText, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from "./ResumeModal";

export default function NavBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  const navItems = [
    { name: 'Projects', icon: <FolderGit2 size={16} className="mr-2" />, href: '#projects' },
    { name: 'Certifications', icon: <BadgeCheck size={16} className="mr-2" />, href: '#certificate' },
    { name: 'Contact', icon: <Mail size={16} className="mr-2" />, href: '#contact' },
    { name: 'Resume', icon: <FileText size={16} className="mr-2" />, action: () => setResumeOpen(true) },
  ];

  return (
    <motion.div
      className="w-full px-4 mt-0 flex justify-end sticky top-4 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 rounded-2xl 
                      bg-black/50 dark:bg-white/10 border border-green-400 dark:border-white/30 
                      backdrop-blur-md shadow-[0_0_15px_#00ff95] relative">

        {/* Left: Name and Time/Date */}
        <div className="flex items-center gap-3 flex-wrap">
          <motion.div
            className="w-fit px-4 py-2 rounded-lg bg-gradient-to-r from-green-400/20 via-green-600/30 to-green-400/20 
                      border border-green-400 shadow-[0_0_10px_#00ff95] backdrop-blur-md 
                      flex items-center justify-start gap-2 text-green-200 dark:text-white font-mono font-bold tracking-wide text-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-5 h-5 text-green-300 animate-pulse" />
            Mark Jeus M. Pagkaliwagan
          </motion.div>

          <div className="flex items-center gap-2">
            <motion.div className="px-3 py-1 rounded-lg bg-black dark:bg-white/10 border border-green-400 text-green-300 dark:text-white font-mono text-sm shadow-[0_0_8px_#00ff95] backdrop-blur-md tracking-widest"
              animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity }}>
              {formattedTime}
            </motion.div>
            <motion.div className="px-3 py-1 rounded-lg bg-black dark:bg-white/10 border border-green-400 text-green-300 dark:text-white font-mono text-sm shadow-[0_0_8px_#00ff95] backdrop-blur-md tracking-wide"
              animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 4, repeat: Infinity }}>
              {formattedDate}
            </motion.div>
          </div>
        </div>

        {/* Mobile Burger Button */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            className="text-green-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Items */}
        <div className="hidden sm:flex flex-row items-center gap-2">
          {navItems.map((item, index) =>
            item.href ? (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center px-3 py-1 rounded-md text-green-300 dark:text-white font-mono text-sm 
                           hover:text-green-100 hover:bg-green-400/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                {item.name}
              </motion.a>
            ) : (
              <motion.button
                key={index}
                onClick={item.action}
                className="flex items-center px-3 py-1 rounded-md text-green-300 dark:text-white font-mono text-sm 
                           hover:text-green-100 hover:bg-green-400/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                {item.name}
              </motion.button>
            )
          )}

          {/* 🌙 Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-3 py-1 rounded-md text-green-300 dark:text-white font-mono text-sm 
                       hover:text-green-100 hover:bg-green-400/10 transition-all duration-300"
          >
            {darkMode ? <Sun className="mr-2" size={16} /> : <Moon className="mr-2" size={16} />}
            {darkMode ? 'Light' : 'Dark'}
          </motion.button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full flex flex-col items-center bg-black/90 border-t border-green-400 mt-2 rounded-b-2xl shadow-[0_5px_15px_#00ff95] sm:hidden z-50"
            >
              {navItems.map((item, index) =>
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-2 px-4 text-green-300 dark:text-white font-mono hover:bg-green-500/10"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      setMenuOpen(false);
                      item.action();
                    }}
                    className="w-full text-center py-2 px-4 text-green-300 dark:text-white font-mono hover:bg-green-500/10"
                  >
                    {item.name}
                  </button>
                )
              )}

              {/* 🌙 Mobile Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full text-center py-2 px-4 text-green-300 dark:text-white font-mono hover:bg-green-500/10 flex items-center justify-center"
              >
                {darkMode ? <Sun className="mr-2" size={16} /> : <Moon className="mr-2" size={16} />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </motion.div>
  );
}
