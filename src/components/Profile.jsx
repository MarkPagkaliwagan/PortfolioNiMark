import React from 'react';
import { motion } from 'framer-motion';
import {
  Goal, Code, TerminalSquare, FileCode,
  Braces, Database, FileJson, Settings, Terminal
} from 'lucide-react';
import profileImg from '../assets/Profile.jpg';

const languages = [
  { name: 'Python', icon: <FileCode className="w-5 h-5" /> },
  { name: 'JavaScript', icon: <Braces className="w-5 h-5" /> },
  { name: 'HTML', icon: <Code className="w-5 h-5" /> },
  { name: 'CSS', icon: <Code className="w-5 h-5" /> },
  { name: 'Java', icon: <TerminalSquare className="w-5 h-5" /> },
  { name: 'C', icon: <TerminalSquare className="w-5 h-5" /> },
  { name: 'C++', icon: <TerminalSquare className="w-5 h-5" /> },
  { name: 'PHP', icon: <FileCode className="w-5 h-5" /> },
  { name: 'SQL', icon: <Database className="w-5 h-5" /> },
  { name: 'Kotlin', icon: <Settings className="w-5 h-5" /> },
  { name: 'Bash', icon: <Terminal className="w-5 h-5" /> },
  { name: 'Dart', icon: <FileJson className="w-5 h-5" /> },
];

export default function Profile() {
  return (
    <section
      id="profile"
      className="py-24 px-4 sm:px-8 md:px-12 bg-gray-700 text-black dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black dark:text-white transition-colors duration-500"
    >
      <motion.div
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-12 sm:gap-16 lg:gap-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* LEFT SIDE */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-square rounded-full overflow-hidden mb-10 shadow-[0_0_80px_#00ff95aa]">
            <img
              src={profileImg}
              alt="Mark Pagkaliwagan"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2 mb-10 px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">Mark Pagkaliwagan</h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 italic">
              BSIT Student @ San Pablo Colleges
            </p>
            <p className="text-sm text-white dark:text-gray-400">
              📍 Barangay Atisan, San Pablo City
            </p>
          </div>

          <div className="max-w-xl text-base text-white dark:text-gray-200 leading-relaxed px-2 sm:px-4">
            <h2 className="text-green-500 font-semibold text-xl mb-3">About Me</h2>
            <p>
              I’m a 3rd-year IT student who thrives on strategy, logic, and creativity.
              I love learning new technologies, solving problems, and pushing my limits in programming.
              My goal is to become a full-stack developer and use my skills to support my family and community.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="space-y-10 sm:space-y-12 pt-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* GitHub Contributions */}
          <div className="bg-gray-700 dark:bg-white/5 border border-green-500 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_#00ff95aa] backdrop-blur-xl">
            <h2 className="text-green-500 font-semibold text-xl mb-4">GitHub Contributions</h2>
            <iframe
              src="https://ghchart.rshah.org/MarkPagkaliwagan"
              title="GitHub Contributions"
              frameBorder="0"
              width="100%"
              height="220"
              className="rounded-xl border border-green-400 bg-white/10"
            />
            <a
              href="https://github.com/MarkPagkaliwagan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline text-sm mt-3 inline-block"
            >
              → View GitHub Profile
            </a>
          </div>

          {/* Life Goals */}
          <div className="bg-gray-700 dark:bg-white/5 border border-green-500 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_#00ff95aa] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-green-500 font-semibold text-base mb-4">
              <Goal className="w-5 h-5" />
              Life Goals
            </div>
            <ul className="list-disc list-inside text-base text-white dark:text-gray-200 space-y-2">
              <li>Master backend and frontend development</li>
              <li>Create real-world apps and portfolio</li>
              <li>Land a developer job after graduation</li>
              <li>Support my family through tech</li>
            </ul>
          </div>

          {/* Language Badges */}
          <div className="w-full overflow-hidden py-4 relative">
            <div className="flex gap-3 animate-scroll whitespace-nowrap">
              {[...languages, ...languages].map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2
                    bg-gray-100 dark:bg-gray-800
                    border border-gray-300 dark:border-gray-600
                    rounded-full shadow-sm
                    text-sm font-medium text-gray-800 dark:text-white
                    hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-green-500">{lang.icon}</div>
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom animation CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
