"use client";

import React from "react";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ResumePage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Print Button */}
      <div className="no-print max-w-4xl mx-auto mb-4 flex justify-end">
        <button
          onClick={handlePrint}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all"
        >
          <Download className="inline mr-2 h-5 w-5" />
          Save as PDF
        </button>
        <a
          href="/"
          className="ml-4 px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all"
        >
          Back to Home
        </a>
      </div>

      {/* Resume Paper */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div id="resume-content" className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">DANA BESTUN</h1>
            <p className="text-xl text-purple-600 font-semibold mb-4">Full Stack Software Engineer</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>danabestun@email.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>+964 750 000 0000</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>Erbil, Kurdistan Region, Iraq</span>
              </div>
              <div className="flex items-center gap-1">
                <Github size={16} />
                <span>github.com/danabestun</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Full Stack Software Engineer with experience in Website and Software development.
              Proficient in React, Next.js, TypeScript, Node.js, Python, and modern web technologies.
              Passionate about creating innovative solutions and delivering exceptional user experiences.
              Worked on multiple production projects including e-commerce platforms, POS systems, and tourism platforms.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Frontend:</h3>
                <p className="text-gray-600">React, Next.js, TypeScript, JavaScript, Tailwind CSS, Material UI, Redux, Vue.js, Angular</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Backend:</h3>
                <p className="text-gray-600">Node.js, Express.js, Python, Django, FastAPI, Rust, .NET, Go, PHP, Laravel</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Database:</h3>
                <p className="text-gray-600">MongoDB, PostgreSQL, MySQL, Redis, Prisma, Firebase, Supabase</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">DevOps & Tools:</h3>
                <p className="text-gray-600">Docker, Kubernetes, AWS, Azure, Google Cloud, GitHub Actions, CI/CD, Git, Linux, Jira, Linear</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
              WORK EXPERIENCE
            </h2>

            <div className="space-y-5">
              {/* Emirates LS */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-800">Full Stack Developer</h3>
                  <span className="text-sm text-gray-500">2025 - Present</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">Emirates LS</p>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Built production projects including e-commerce platforms and large-scale applications</li>
                  <li>Maintained Tokopedia e-commerce platform</li>
                </ul>
              </div>

              {/* Nano Tech Selmani */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-800">Full Stack Developer</h3>
                  <span className="text-sm text-gray-500">2025 - Present</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">Nano Tech Selmani</p>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Building production projects and delivering high-quality software solutions</li>
                  <li>Developed HR Management System and other client solutions</li>
                </ul>
              </div>

              {/* Techno Base */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-800">Full Stack Developer</h3>
                  <span className="text-sm text-gray-500">2025</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">Techno Base</p>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Built and maintained production projects for clients</li>
                  <li>Worked on Visit Kurdistan tourism platform</li>
                </ul>
              </div>

              {/* Nishtman */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-800">Full Stack Developer</h3>
                  <span className="text-sm text-gray-500">2024 - 2025</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">Nishtman Strategy Institute</p>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Developed and maintained Nishtman Strategy Institute website and platforms</li>
                  <li>Built features for empowering Kurdish youth through scientific research and educational publications</li>
                </ul>
              </div>

              {/* Gigant Tech */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-gray-800">Full Stack Developer Intern</h3>
                  <span className="text-sm text-gray-500">Oct 2023 - Dec 2023</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">Gigant Tech</p>
                <ul className="text-gray-700 list-disc list-inside space-y-1">
                  <li>Completed 3-month internship program</li>
                  <li>Built production-ready web applications and gained hands-on experience with modern technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
              NOTABLE PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">POS System</h3>
                <p className="text-sm text-gray-600">Built for DMA Company, Aram Shops, and local markets</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Cafe Care System</h3>
                <p className="text-sm text-gray-600">3-in-1 system for Brisa and Captain cafes</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Sales Tracking System</h3>
                <p className="text-sm text-gray-600">Real-time monitoring for DMA Company</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">HR Management System</h3>
                <p className="text-sm text-gray-600">Built for Selmani Company</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Tokopedia</h3>
                <p className="text-sm text-gray-600">E-commerce platform maintenance</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-semibold text-gray-800">Visit Kurdistan</h3>
                <p className="text-sm text-gray-600">Tourism platform maintenance</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
              EDUCATION
            </h2>
            <div className="text-gray-700">
              <p className="font-semibold">Bachelor's Degree in Computer Science / Software Engineering</p>
              <p className="text-gray-600">University of Kurdistan - Erbil, Iraq</p>
            </div>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .no-print {
            display: none !important;
          }
          #resume-content {
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;
