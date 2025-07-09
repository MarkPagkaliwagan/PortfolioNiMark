import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
<section
  id="contact"
  className="scroll-mt-16 bg-transparent text-white py-16 px-4 sm:px-6 lg:px-12"
>
  <motion.div
    className="w-full max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="bg-black/50 border border-green-500 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_#00ff95]">
      <div className="flex items-center gap-2 text-green-300 font-bold mb-6 text-sm">
        <Mail className="w-4 h-4" />
        Contact Me
      </div>

      <form
        action="https://formspree.io/f/xgvyjlog"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-black/40 border border-green-400 rounded-md px-4 py-2 text-green-200 placeholder-green-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-black/40 border border-green-400 rounded-md px-4 py-2 text-green-200 placeholder-green-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="bg-black/40 border border-green-400 rounded-md px-4 py-2 text-green-200 placeholder-green-400"
        />
        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 bg-green-500/20 text-green-300 border border-green-400 rounded-md px-4 py-2 font-mono font-bold hover:bg-green-400/30 transition-all duration-300"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  </motion.div>
</section>

  );
}
