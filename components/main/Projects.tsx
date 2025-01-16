import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/5460829670669936706 (1).jpg"
          title="E-commerce"

          description="Developing a responsive e-commerce website using Next.js and TypeScript, integrated with a CMS for dynamic data management......"
        />
        <ProjectCard
          src="/Screenshot 2025-01-16 200235.png"
          title="Online Course Platform"
        
          description="A  full-stack web application designed to streamline online learning and teaching. The platform empowers teachers to upload courses, and...."
        />
        <ProjectCard
          src="/Screenshot 2025-01-16 200559.png"
          title="Dashboard"
          description="A modern web platform built with Next.js, featuring secure authentication, user management, role-based access control, and responsive design. ......"
        />
      </div>
    </div>
  );
};

export default Projects;
