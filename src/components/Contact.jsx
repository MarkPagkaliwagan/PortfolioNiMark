import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FaRegSmileBeam } from 'react-icons/fa'; // ✅ Add this
import markPic from '../assets/mark.png';

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState(false); // ✅ Move inside component

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-gray-700 text-black dark:bg-black dark:text-white py-20 px-4 sm:px-6 lg:px-12 overflow-x-hidden"
    >
      {/* 🌟 Styled Header */}
      <motion.div
        className="relative text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block px-8 py-4 border-4 border-green-400 rounded-xl shadow-lg bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-500 dark:text-green-400 tracking-widest uppercase drop-shadow-md">
            Contact Me
          </h2>
          <div className="mt-2 w-full h-1 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-6 text-white dark:text-gray-400 text-sm max-w-xl mx-auto italic">
          I'm open to opportunities, questions, or just a chat. Drop your message below!
        </p>
      </motion.div>

      {/* 📬 Contact Form */}
      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="bg-gray-700 dark:bg-black/50 border border-green-500 rounded-2xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-[0_0_30px_#00ff95]">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* 📝 Form */}
            <div className="w-full lg:w-2/3">
              <motion.form
                action="https://formspree.io/f/xgvyjlog"
                method="POST"
                className="flex flex-col gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ staggerChildren: 0.15 }}
                variants={{ hidden: {}, visible: {} }}
              >
                {['name', 'email', 'message'].map((field, idx) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    {field === 'message' ? (
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full bg-white dark:bg-black/40 border border-green-400 rounded-md px-4 py-3 text-gray-800 dark:text-green-200 placeholder-gray-500 dark:placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        placeholder={`Your ${field === 'email' ? 'Email' : 'Name'}`}
                        required
                        className="w-full bg-white dark:bg-black/40 border border-green-400 rounded-md px-4 py-3 text-gray-800 dark:text-green-200 placeholder-gray-500 dark:placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 bg-gray-700 text-green-700 dark:text-green-300 border border-green-400 rounded-md px-5 py-3 font-mono font-bold hover:bg-green-400/30 transition-all duration-300 shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </motion.form>
            </div>

{/* 👤 Mark Image with "Click me" label */}
<div className="w-full lg:w-1/3 flex flex-col items-center" style={{ perspective: "1000px" }}>
  <motion.div
    onClick={() => setIsFlipped(!isFlipped)}
    animate={{ rotateY: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.8 }}
    className="relative w-[250px] sm:w-[300px] h-[300px] mb-3"
    style={{
      transformStyle: "preserve-3d",
      cursor: "pointer",
    }}
  >
    {/* Front Side */}
    <div
      className="absolute w-full h-full"
      style={{
        backfaceVisibility: "hidden",
      }}
    >
      <img
        src={markPic}
        alt="Mark"
        className="rounded-2xl shadow-xl border border-green-200 w-full h-full object-cover shadow-[0_0_20px_#00ff95]"
      />
    </div>

    {/* Back Side */}
    <div
      className="absolute w-full h-full flex flex-col items-center justify-center bg-black/80 text-green-400 rounded-2xl border border-green-300 shadow-[0_0_20px_#00ff95]"
      style={{
        transform: "rotateY(180deg)",
        backfaceVisibility: "hidden",
      }}
    >
      <FaRegSmileBeam className="text-4xl mb-2" />
      <p className="text-xl font-bold">Hwaiting!</p>
    </div>
  </motion.div>

  {/* Click Me Text */}
  <p className="text-sm text-green-300 italic animate-pulse">Click me</p>
</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
