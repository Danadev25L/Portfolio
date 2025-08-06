"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  githubLink: string;
  link: string;
}

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [isHomePage, setIsHomePage] = useState(false);

  // Project data with updated GitHub and preview links
  const projects: Project[] = [
    // 1. Nishtman Strategy Institute
    {
      id: 10,
      src: "/thumbnail.jpg",
      title: "Nishtman Strategy Institute",
      description: "Nishtman Strategy Institute is dedicated to empowering Kurdish youth through scientific research, educational publications, and socio-cultural activities. The institute connects young people with their potential, their community, and the broader region, fostering active roles in society and supporting innovative projects across Kurdistan.",
      githubLink: "#",
      link: "https://nishtmanstrategyinstitute.com/"
    },
    // 2. ZagaMall
    {
      id: 5,
      src: "/Screenshot 2025-08-05 144851.png",
      title: "ZagaMall",
      description: "ZagaMall is Erbil's premier shopping and entertainment destination, featuring over 200 stores, diverse dining options, cinemas, arcades, and regular events. Experience the best in shopping, dining, and family entertainment in the heart of the city.",
      githubLink: "#",
      link: "https://zagamallerbil.com/"
    },
    // 3. School Management System (dashboard)
    {
      id: 12,
      src: "/Screenshot 2025-08-05 154344.png",
      title: "School Management System",
      description: "A comprehensive school management system for administrators, teachers, students, and parents. Features include attendance tracking, grade management, scheduling, communication tools, reporting, and a full-featured dashboard for school operations.",
      githubLink: "#",
      link: "#"
    },
    // 4. ZagaMall Dashboard
    {
      id: 9,
      src: "/Screenshot 2025-08-05 144748.png",
      title: "ZagaMall Dashboard",
      description: "A comprehensive admin and analytics dashboard for ZagaMall, providing real-time insights into mall operations, store performance, event management, and visitor analytics. Built for the ZagaMall team to efficiently manage and monitor all aspects of the shopping center.",
      githubLink: "#",
      link: "https://zagamallerbil.com/"
    },
    // 5. DanaRent (Real Estate) - with video
    {
      id: 3,
      src: "/landing.png",
      title: "DanaRent",
      description: "A comprehensive real estate platform connecting property managers with tenants. Features specialized dashboards for property management and tenant applications.",
      githubLink: "https://github.com/Danadev25L/Real-State-",
      link: "https://github.com/Danadev25L/Real-State-"
    },
    {
      id: 1,
      src: "/furatpay.png",
      title: "Furapay",
      description: "Iraq's first all-in-one payment platform with instant invoicing, WooCommerce integration, and unified API.",
      githubLink: "#",
      link: "https://furatpay.com/"
    },
    {
      id: 2,
      src: "/ai.png",
      title: "IFitness",
      description: "Ifitness-ai is an advanced AI platform delivering personalized workout plans and nutrition advice. The system features an interactive voice coach, custom fitness routines, tailored meal recommendations, and comprehensive profile management .....",
      githubLink: "#",
      link: "https://ifitness-production.up.railway.app/"
    },
    {
      id: 4,
      src: "/Screenshot 2025-01-16 200235.png",
      title: "Online Course Platform",
      description: "A full-stack web application designed to streamline online learning and teaching, featuring video lessons, interactive quizzes, and a comprehensive dashboard for educators.",
      githubLink: "https://github.com/Danadev25L/Learning-mangment",
      link: "#"
    },

    {
      id: 7,
      src: "/foodorder.png",
      title: "FoodOrder App",
      description: "A modern food delivery app with real-time order tracking, restaurant discovery, and seamless payment integration.",
      githubLink: "#",
      link: "#"
    },
    {
      id: 8,
      src: "/SpaceWebsite.png",
      title: "Space Website",
      description: "A visually stunning website for space enthusiasts, featuring interactive 3D models, news, and educational resources about the universe.",
      githubLink: "#",
      link: "#"
    },
    {
      id: 11,
      src: "/Screenshot 2025-08-05 145332.png",
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, secure checkout, order tracking, and admin dashboard. Built for scalability and seamless user experience.",
      githubLink: "#",
      link: "#"
    },
  ];

  useEffect(() => {
    const isHome = window.location.pathname === '/';
    setIsHomePage(isHome);
    setDisplayedProjects(isHome ? projects.slice(0, 6) : projects);
  }, []);

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
          {displayedProjects.map((project, index) => (
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
        {/* See more button, only show if on home page */}
        {isHomePage && (
          <div className="flex justify-center mt-8">
            <a
              href="/projects"
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-cyan-600 transition-colors"
            >
              See more
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Projects;