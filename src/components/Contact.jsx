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
        initial={{ opacity: 0, y: 100 }} // 👈 Large drop
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // 👈 Re-animates on every scroll
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="bg-black/50 border border-green-500 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_#00ff95]">
          <motion.div
            className="flex items-center gap-2 text-green-300 font-bold mb-6 text-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.div>

          <motion.form
            action="https://formspree.io/f/xgvyjlog"
            method="POST"
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.15 }}
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {['name', 'email', 'message'].map((field, idx) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {field === 'message' ? (
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full bg-black/40 border border-green-400 rounded-md px-4 py-2 text-green-200 placeholder-green-400"
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    placeholder={`Your ${field === 'email' ? 'Email' : 'Name'}`}
                    required
                    className="w-full bg-black/40 border border-green-400 rounded-md px-4 py-2 text-green-200 placeholder-green-400"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 bg-green-500/20 text-green-300 border border-green-400 rounded-md px-4 py-2 font-mono font-bold hover:bg-green-400/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
