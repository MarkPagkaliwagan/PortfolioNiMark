import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCertificate, FaUniversity } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';

const certificates = [
  {
    title: 'NC II Computer Systems Servicing',
    issuer: 'TESDA',
    date: 'June 21, 2024',
    image: cert1,
  },
  {
    title: 'Build a Free Website with WordPress',
    issuer: 'Coursera',
    date: 'April 10, 2024',
    image: cert2,
  },
  {
    title: 'Introduction to Microsoft Excel',
    issuer: 'Coursera',
    date: 'April 10, 2024',
    image: cert3,
  },
];

export default function ElegantCertificates() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section
      id="certipications"
      className="scroll-mt-16 bg-transparent text-white py-10 px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaCertificate className="inline mr-2 text-green-400" />
        My Certificates
      </motion.h2>

      {/* Certificate Grid */}
      <div className="w-full max-w-7xl grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="rounded-xl overflow-hidden shadow-lg bg-black/20 backdrop-blur-md border border-green-500 hover:scale-105 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title || 'Certificate Image'}
              className="w-full h-80 object-cover object-top"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-green-300 flex items-center gap-2">
                <HiDocumentText /> {cert.title}
              </p>
              <p className="text-sm text-green-400 flex items-center gap-2 mt-1">
                <FaUniversity /> {cert.issuer}
              </p>
              <p className="text-xs text-green-500 flex items-center gap-2 mt-1">
                <FiClock /> {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Fullscreen View */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
              >
                <IoClose className="text-2xl" />
              </button>

              {/* Zoom Image */}
              <Zoom>
                <img
                  src={selected.image}
                  alt={selected.title || 'Selected Certificate'}
                  className="w-full h-auto object-contain rounded-lg border border-green-400 shadow-2xl"
                />
              </Zoom>

              {/* Metadata */}
              <div className="mt-6 text-center text-green-300">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <p className="text-md text-green-400">{selected.issuer}</p>
                <p className="text-sm text-green-500">{selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
