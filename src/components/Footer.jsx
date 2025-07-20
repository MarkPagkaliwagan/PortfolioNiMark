import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Github, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="bg-black/80 text-green-100 border-t border-green-600 backdrop-blur-md px-6 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Branding */}
        <div className="text-center lg:text-left">
          <h2 className="text-xl font-semibold text-green-400">Mark Jeus Pagkaliwagan</h2>
          <p className="text-sm text-green-300">Passionate Developer | BSIT @ SPC</p>
          <p className="text-xs text-green-200 mt-1">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-green-300 text-lg">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            <Facebook />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            <Linkedin />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition duration-300">
            <Github />
          </a>
        </div>

        {/* Scroll to Top */}
        <motion.button
          onClick={scrollToTop}
          className="bg-green-500 text-black p-2 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
          whileHover={{ scale: 1.2, rotate: 90 }}
          title="Back to Top"
        >
          <ChevronUp size={20} />
        </motion.button>
      </div>
    </motion.footer>
  );
}
