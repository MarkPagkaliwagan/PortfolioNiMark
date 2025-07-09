import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode, FaUsers } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';


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
      description: "Simple wibsite For the department of SASO",
      image: pic3,
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-16 bg-transparent text-white py-9 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl font-bold flex justify-center items-center gap-3 text-green-400">
            <FaRocket className="text-green-400 animate-bounce" />
            My Projects
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-zinc-300 mb-12 text-center flex justify-center items-center gap-2"
        >
          <FaLaptopCode className="text-blue-400" />
          Solo projects &nbsp;|&nbsp;
          <FaUsers className="text-pink-400" />
          Collaborations
        </motion.p>

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="transition-transform duration-300 cursor-pointer"
            >
              <Card className="bg-black/20 backdrop-blur-md border border-green-500 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-green-400/20 transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover object-top"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-green-300 mb-2">{project.title}</h3>
                  <p className="text-green-400 text-sm mb-3">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-sm"
                  >
                    View Project →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
