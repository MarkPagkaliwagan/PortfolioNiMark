import React from 'react';
import profileImg from '../assets/Profile.jpg';
import { Goal } from 'lucide-react';
import { motion } from 'framer-motion';
import Language from './Language';

export default function Profile() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 text-green-100 py-16 px-4 sm:px-6 lg:px-12 bg-transparent"
    >
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Profile Card */}
        <motion.div
          className="w-full lg:w-[380px] bg-black/60 border border-green-500 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_40px_#00ff95] flex flex-col gap-6 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-400 blur-2xl opacity-20 rounded-full z-0" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-400 blur-2xl opacity-10 rounded-full z-0" />

          <motion.div
            className="relative w-fit"
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            <div className="absolute inset-0 rounded-xl border border-green-500 animate-pulse opacity-20" />
            <img
              src={profileImg}
              alt="Mark Jeus"
              className="w-40 h-40 rounded-xl border-2 border-green-400 object-cover shadow-md relative z-10"
            />
          </motion.div>

          <div className="z-10">
            <p className="text-green-300 text-sm italic">BSIT Student @ San Pablo Colleges</p>
            <p className="text-xs text-green-200 mt-1">📍 Barangay Atisan, San Pablo City</p>
          </div>

          <p className="text-sm leading-relaxed z-10">
            I’m a 3rd-year student who loves strategy, logic, and creative challenges. 
            I enjoy exploring new tech and figuring out how things work, especially in programming. 
            My dream is to help my family by growing as a skilled developer.
          </p>
        </motion.div>

        {/* Goals & Language */}
        <motion.div
          className="w-full flex flex-col gap-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-black/50 border border-green-500 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_#00ff95]">
            <div className="flex items-center gap-2 text-green-300 font-bold mb-4 text-sm">
              <Goal className="w-4 h-4" />
              Goals
            </div>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>Master backend and frontend development</li>
              <li>Create real-world apps and portfolio</li>
              <li>Land a developer job after graduation</li>
              <li>Help support my family</li>
            </ul>
          </div>

          <Language />
        </motion.div>
      </motion.div>
    </section>
  );
}
