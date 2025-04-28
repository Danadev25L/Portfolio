"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  // Project data with updated GitHub and preview links
  const projects = [
    {

      
        id: 1,
        src: "/furatpay.png",
        title: "Furapay",
        description: "Iraq's first all-in-one payment platform with instant invoicing, WooCommerce integration, and unified API.",
        githubLink: "#",
        link: "https://furatpay.com/"
      },{
      id: 2,
      src: "/ai.png",
      title: "IFitness",
      description: "Ifitness-ai is an advanced AI platform delivering personalized workout plans and nutrition advice. The system features an interactive voice coach, custom fitness routines, tailored meal recommendations, and comprehensive profile management .....",
      githubLink: "#",
      link: "https://ifitness-production.up.railway.app/"
    },
    {
      id: 3,
      src: "/landing.png",
      title: "DanaRent",
      description: "A comprehensive real estate platform connecting property managers with tenants. Features specialized dashboards for property management and tenant applications.",
      githubLink: "https://github.com/Danadev25L/Real-State-",
      link: "https://github.com/Danadev25L/Real-State-"
    },
    {
      id: 4,
      src: "/Screenshot 2025-01-16 200235.png",
      title: "Online Course Platform",
      description: "A full-stack web application designed to streamline online learning and teaching, featuring video lessons, interactive quizzes, and a comprehensive dashboard for educators.",
      githubLink: "https://github.com/Danadev25L/Learning-mangment",
      link: "#"
    },
  ];

  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center py-20"
      id="projects"
    >
      {/* Same background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-blue-600/10 to-purple-600/10 rounded-full blur-2xl" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Recent Projects
        </h1>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Explore my latest work featuring modern web applications built with React, Next.js, and TypeScript.
        </p>
        
        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full flex"
            >
              <div className="w-full">
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  link={project.link}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;