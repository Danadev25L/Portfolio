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

// Project data with updated GitHub and preview links
const PROJECTS_DATA: Project[] = [
    // 1. Nishtman Strategy Institute
    {
      id: 10,
      src: "/thumbnail.jpg",
      title: "Nishtman Strategy Institute",
      description: "Nishtman Strategy Institute is dedicated to empowering Kurdish youth through scientific research, educational publications, and socio-cultural activities. The institute connects young people with their potential, their community, and the broader region, fostering active roles in society and supporting innovative projects across Kurdistan.",
      githubLink: "#",
      link: "https://nishtmansi.com"
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
    // 3. Furatpay
    {
      id: 1,
      src: "/furatpay.png",
      title: "Furatpay",
      description: "Iraq's first all-in-one payment platform with instant invoicing, WooCommerce integration, and unified API.",
      githubLink: "#",
      link: "https://furatpay.com/"
    },
    // 4. Tokopedia
    {
      id: 16,
      src: "https://p16-assets-sg.tokopedia-static.net/tos-alisg-i-cqp9s0kcd0-sg/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg",
      title: "Tokopedia",
      description: "Worked with Emirates LS as maintenance team on Tokopedia - a major e-commerce marketplace platform connecting buyers and sellers with secure payments, wide product range, and fast delivery across Indonesia.",
      githubLink: "#",
      link: "https://tokopedia.com"
    },
    // 5. Visit Kurdistan
    {
      id: 17,
      src: "/visit-kurdistan.png",
      title: "Visit Kurdistan",
      description: "Worked with Techno Base as maintenance team on Visit Kurdistan - a tourism platform showcasing Kurdistan's beautiful destinations, culture, and heritage. Features travel guides, hotel bookings, tour packages, and local experiences.",
      githubLink: "#",
      link: "#"
    },
    // 6. Pepu Management
    {
      id: 19,
      src: "/lms-system.png",
      title: "Pepu Management",
      description: "Worked on maintenance for Pepu's social media platforms and mobile application. Managed content updates, user engagement, and ongoing app maintenance and support.",
      githubLink: "#",
      link: "#"
    },
    // 7. POS System - DMA Company
    {
      id: 12,
      src: "/pos-system.png",
      title: "POS System",
      description: "A Point of Sale system built for DMA Company, Aram Shops, and local markets including Sara Market, Ashti Market, and Azadi Market. Features product management, sales tracking, inventory control, and Kurdish language support.",
      githubLink: "#",
      link: "#"
    },
    // 8. Cafe Care System - Brisa & Captain
    {
      id: 13,
      src: "/pos-system-2.png",
      title: "Cafe Care System",
      description: "A comprehensive 3-in-1 system built for Brisa and Captain cafes. Includes Point of Sale, inventory management, and customer care - all in one unified platform.",
      githubLink: "#",
      link: "#"
    },
    // 9. Sales Tracking System - DMA Company
    {
      id: 14,
      src: "/pos-system-3.png",
      title: "Sales Tracking System",
      description: "A complete tracking and POS system for DMA Company with real-time sales monitoring, money calculation, inventory tracking, and financial reporting.",
      githubLink: "#",
      link: "#"
    },
    // 10. HR Management System - Selmani Company
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "HR Management System",
      description: "A comprehensive HR management system built for Selmani Company. Features employee management, attendance tracking, payroll calculation, leave management, and performance reviews.",
      githubLink: "#",
      link: "#"
    },
    // 11. ZagaMall Dashboard
    {
      id: 9,
      src: "/Screenshot 2025-08-05 144748.png",
      title: "ZagaMall Dashboard",
      description: "A comprehensive admin and analytics dashboard for ZagaMall, providing real-time insights into mall operations, store performance, event management, and visitor analytics. Built for the ZagaMall team to efficiently manage and monitor all aspects of the shopping center.",
      githubLink: "#",
      link: "https://zagamallerbil.com/"
    },
    // 12. DanaRent (Real Estate)
    {
      id: 3,
      src: "/landing.png",
      title: "DanaRent",
      description: "A comprehensive real estate platform connecting property managers with tenants. Features specialized dashboards for property management and tenant applications.",
      githubLink: "https://github.com/Danadev25L/Real-State-",
      link: "https://github.com/Danadev25L/Real-State-"
    },
    // 13. IFitness
    {
      id: 2,
      src: "/ai.png",
      title: "IFitness",
      description: "Ifitness-ai is an advanced AI platform delivering personalized workout plans and nutrition advice. The system features an interactive voice coach, custom fitness routines, tailored meal recommendations, and comprehensive profile management .....",
      githubLink: "#",
      link: "https://ifitness-production.up.railway.app/"
    },
    // 14. Online Course Platform
    {
      id: 4,
      src: "/Screenshot 2025-01-16 200235.png",
      title: "Online Course Platform",
      description: "A full-stack web application designed to streamline online learning and teaching, featuring video lessons, interactive quizzes, and a comprehensive dashboard for educators.",
      githubLink: "https://github.com/Danadev25L/Learning-mangment",
      link: "#"
    },
    // 15. FoodOrder App
    {
      id: 7,
      src: "/foodorder.png",
      title: "FoodOrder App",
      description: "A modern food delivery app with real-time order tracking, restaurant discovery, and seamless payment integration.",
      githubLink: "#",
      link: "#"
    },
    // 16. Space Website
    {
      id: 8,
      src: "/SpaceWebsite.png",
      title: "Space Website",
      description: "A visually stunning website for space enthusiasts, featuring interactive 3D models, news, and educational resources about the universe.",
      githubLink: "#",
      link: "#"
    },
    // 17. E-commerce Website
    {
      id: 11,
      src: "/Screenshot 2025-08-05 145332.png",
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, secure checkout, order tracking, and admin dashboard. Built for scalability and seamless user experience.",
      githubLink: "#",
      link: "#"
    },
  ];

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const isHome = window.location.pathname === '/';
    setIsHomePage(isHome);
    setDisplayedProjects(isHome ? PROJECTS_DATA.slice(0, 6) : PROJECTS_DATA);
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
          Selected work
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
              View all projects
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Projects;
