import React from 'react';
import {
  Code, TerminalSquare, FileCode, Braces, Database,
  FileJson, Settings, Terminal, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

const languages = [
  { name: 'Python', icon: <FileCode className="w-4 h-4" /> },
  { name: 'JavaScript', icon: <Braces className="w-4 h-4" /> },
  { name: 'HTML', icon: <Code className="w-4 h-4" /> },
  { name: 'CSS', icon: <Code className="w-4 h-4" /> },
  { name: 'Java', icon: <TerminalSquare className="w-4 h-4" /> },
  { name: 'C', icon: <TerminalSquare className="w-4 h-4" /> },
  { name: 'C++', icon: <TerminalSquare className="w-4 h-4" /> },
  { name: 'PHP', icon: <FileCode className="w-4 h-4" /> },
  { name: 'SQL', icon: <Database className="w-4 h-4" /> },
  { name: 'Kotlin', icon: <Settings className="w-4 h-4" /> },
  { name: 'Bash', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Dart', icon: <FileJson className="w-4 h-4" /> },
];

export default function Language() {
  return (
    <div className="w-full bg-black/50 border border-green-500 
      rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_#00ff95] flex flex-col gap-5 text-green-100">
      
      <div className="flex items-center gap-2 text-green-300 font-bold mb-2 text-sm">
        <Globe className="w-4 h-4" />
        Programming Languages
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3 text-sm font-mono">
        {languages.map((lang, index) => (
          <motion.li
            key={index}
            title={lang.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center gap-2 p-2 rounded-lg 
              bg-green-900/10 border border-green-700 
              hover:bg-green-600/30 hover:text-white 
              transition duration-200"
          >
            <span className="text-green-300">{lang.icon}</span>
            {lang.name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
