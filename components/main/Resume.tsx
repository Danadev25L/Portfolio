"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DanaBestunResume.pdf'; // Updated to match the new file name
    link.download = 'DanaBestunResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative z-10 flex flex-col items-center justify-center py-20"
      id="resume"
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
        className="w-full max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-[40px] md:text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-8">
          Resume
        </h1>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Download my comprehensive resume to learn more about my experience, skills, and achievements in web development.
        </p>
        
        {/* Resume Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0C0C24] hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all duration-300"
        >
          <div className="p-8 md:p-12">
            <div className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dana Dev - Full Stack Developer
              </h2>
              
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Experienced developer specializing in React, Next.js, TypeScript, and modern web technologies. 
                Passionate about creating innovative solutions and delivering exceptional user experiences.
              </p>
              
              {/* Skills Preview */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git'].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </button>
              
              <p className="text-gray-400 text-sm mt-4">
                PDF format • Updated regularly
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-500 rounded-full opacity-60"></div>
          <div className="absolute top-1/2 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 right-8 w-1 h-1 bg-cyan-400 rounded-full opacity-40"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume; 