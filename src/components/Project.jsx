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
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="scroll-mt-16 bg-black text-white py-28 px-4 sm:px-6 lg:px-12"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: "spring", bounce: 0.4 },
          },
        }}
        className="text-center mb-8"
      >
        <h2 className="text-5xl font-bold flex justify-center items-center gap-4 text-green-400">
          <FaRocket className="animate-bounce" />
          My Projects
        </h2>
      </motion.div>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: -50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 1, type: "spring", bounce: 0.3 },
          },
        }}
        className="text-xl text-zinc-300 mb-16 text-center flex justify-center items-center gap-3"
      >
        <FaLaptopCode className="text-blue-400" />
        Solo Projects &nbsp;|&nbsp;
        <FaUsers className="text-pink-400" />
        Collaborations
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              delay: index * 0.3,
              duration: 1,
              type: "spring",
              bounce: 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            className="transition-transform duration-300 cursor-pointer"
          >
            <Card className="bg-black/30 backdrop-blur-md border border-green-500 text-white rounded-2xl shadow-xl hover:shadow-green-400/40 transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover object-top rounded-t-2xl"
              />
              <CardContent className="p-5">
                <h3 className="text-2xl font-semibold text-green-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-green-400 text-sm mb-3">{project.description}</p>
                <a
                  href={project.link || "#"}
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
      </div>
    </motion.section>
  );
}
