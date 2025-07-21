import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode, FaUsers } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default function Project() {
  const projects = [
    {
      title: "Planning Flow",
      description: "A basic Mobile Application I built as a beginner.",
      image: pic1,
    },
    {
      title: "React Portfolio",
      description: "A modern portfolio built using React and Tailwind CSS.",
      image: pic2,
    },
    {
      title: "SASO Website",
      description: "Simple website for the department of SASO.",
      image: pic3,
    },
  ];

  return (
    <motion.section
      id="projects"
      className="scroll-mt-16 bg-gray-700 text-black dark:bg-black dark:text-white py-20 px-4 sm:px-6 lg:px-12 overflow-x-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* 🔰 Section Title */}
      <motion.div
        className="text-center mb-16"
        variants={{
          hidden: { opacity: 0, y: -80 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="inline-block px-8 py-4 border-4 border-green-400 rounded-xl shadow-lg bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-500 tracking-widest uppercase drop-shadow-md flex items-center justify-center gap-3">
            <FaRocket className="animate-bounce" />
            My Projects
          </h2>
          <div className="mt-2 w-full h-1 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <p className="mt-6 text-white dark:text-gray-400 text-sm max-w-xl mx-auto italic flex items-center justify-center gap-3">
          <FaLaptopCode className="text-blue-500 dark:text-blue-400" />
          Solo Projects &nbsp;|&nbsp;
          <FaUsers className="text-pink-500 dark:text-pink-400" />
          Collaborations
        </p>
      </motion.div>

      {/* 🧩 Project Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              delay: index * 0.3,
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
            }}
            whileHover={{ scale: 1.05 }}
            className="transition-transform duration-300 cursor-pointer"
          >
            <Card className="bg-gray-700 dark:bg-white/10 border border-green-500 text-black dark:text-white rounded-2xl shadow-xl backdrop-blur-md hover:shadow-green-400/40 transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <CardContent className="p-5">
                <h3 className="text-2xl font-semibold text-green-600 dark:text-green-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-green-700 dark:text-green-400 text-sm mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-400 hover:underline text-sm"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
