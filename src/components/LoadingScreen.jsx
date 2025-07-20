import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiCode } from 'react-icons/fi';
import mark from '../assets/mark.png';

export default function LoadingScreen({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const loadingText = 'Launching Portfolio...';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTextIndex((prev) =>
        prev < loadingText.length ? prev + 1 : prev
      );
    }, 70); // typing speed

    const timer = setTimeout(() => {
      clearInterval(typingInterval);
      setLoading(false);
      onFinish();
    }, 3000); // total duration

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center text-green-300 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 💫 Background Glow Zoom Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-900 opacity-80"
        animate={{ scale: [1, 1.1], opacity: [0.7, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
      />

      {/* 🔆 Glowing Avatar */}
      <motion.div
        className="z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.img
          src={mark}
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-[0_0_60px_#00ff95]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />

        {/* 🧑‍💻 Typing Text */}
        <div className="mt-6 font-mono text-2xl tracking-wide text-center">
          <span>{loadingText.slice(0, textIndex)}</span>
          <span className="animate-ping text-green-400">|</span>
        </div>

        {/* ⚪ 3 Bouncing Dots */}
        <div className="flex mt-4 space-x-3">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_12px_#00ff95]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.9,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
