"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  gradient,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  gradient: string;
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-[#0C0C24]/80 backdrop-blur-sm rounded-xl border border-[#2A0E61] hover:border-purple-500/50 transition-all duration-300 group"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-xl blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-purple-400 font-medium">{company}</p>
          <p className="text-gray-400 text-sm mt-1">{period}</p>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const WorkExperience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Gigant Tech",
      period: "Oct 2023 - Dec 2023",
      description: "Worked as full stack developer intern. Built production-ready web applications and gained hands-on experience with modern technologies.",
      gradient: "from-purple-500 to-cyan-500",
    },
    {
      title: "Full Stack Developer",
      company: "Techno Base",
      period: "2025",
      description: "Worked as full stack developer. Built and maintained production projects for clients, delivering scalable web solutions.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Full Stack Developer",
      company: "Nano Tech Selmani",
      period: "2025 - Present",
      description: "Currently working as full stack developer. Building production projects and delivering high-quality software solutions.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Full Stack Developer",
      company: "Emirates LS",
      period: "2025 - Present",
      description: "Working as full stack developer. Built production projects including local products and large-scale applications.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 flex flex-col items-center justify-center py-20"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-4">
            Work Experience
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
            My professional journey in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                gradient={exp.gradient}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
