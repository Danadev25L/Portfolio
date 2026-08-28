"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import ProjectCard from "../sub/ProjectCard";
import { ORDERED_PROJECTS } from "@/data/projects";

const Projects = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const displayedProjects = isHomePage ? ORDERED_PROJECTS.slice(0, 8) : ORDERED_PROJECTS;

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-blue-600/10 to-purple-600/10 blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
          Product work & case studies
        </p>
        <h1 className="mb-6 bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text text-center text-[40px] font-bold text-transparent md:text-[54px]">
          Selected work
        </h1>
        <p className="mx-auto mb-14 max-w-2xl text-center leading-7 text-gray-300">
          Product engineering across marketplaces, delivery, payments, AI, media infrastructure, and Kurdish digital platforms. Open any project for the full story.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 36, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(index, 5) * 0.08 }}
              className="flex h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-12 flex justify-center">
            <a
              href="/projects"
              className="rounded-full border border-cyan-300/30 bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/20"
            >
              Explore all case studies
            </a>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
