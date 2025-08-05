'use client';
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about-me");
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Only handle scroll-based navigation on the home page
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = ["about-me", "skills", "projects"];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);
  
  const handleNavigation = (section: string) => {
    if (pathname === '/') {
      // On home page, scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On other pages, navigate to home page with section
      router.push(`/#${section}`);
    }
  };
  
  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          {/* Logo Section */}
          <div 
            className="h-auto w-auto flex flex-row items-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-2 hidden sm:block text-gray-300"> Dana Dev</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex w-[500px] h-full items-center justify-between">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] md:px-[20px] py-[5px] md:py-[10px] rounded-full text-gray-200 text-sm md:text-base">
              <button 
                onClick={() => handleNavigation("about-me")}
                className={`cursor-pointer ${activeSection === "about-me" ? "text-[#7042f8] font-medium" : ""}`}
              >
                About me
              </button>
              <button 
                onClick={() => handleNavigation("skills")}
                className={`cursor-pointer ${activeSection === "skills" ? "text-[#7042f8] font-medium" : ""}`}
              >
                Skills
              </button>
              <button 
                onClick={() => handleNavigation("projects")}
                className={`cursor-pointer ${activeSection === "projects" ? "text-[#7042f8] font-medium" : ""}`}
              >
                Projects
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-3 md:gap-5">
            {Socials.map((social) => (
              <Link href={social.url} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom App Menu - Enhanced Styling */}
      <div className="lg:hidden w-full fixed bottom-0 left-0 z-50 bg-[#03001499] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 flex justify-around py-2 border-t border-[#7042f861] rounded-t-xl">
        <button 
          onClick={() => handleNavigation("about-me")}
          className={`flex flex-col items-center relative px-4 py-2 transition-all duration-300 ${
            activeSection === "about-me" 
              ? "text-white" 
              : "text-gray-300 hover:text-gray-100"
          }`}
        >
          {activeSection === "about-me" && (
            <span className="absolute inset-0 bg-gradient-to-r from-[#7042f8] to-[#8d6afb] rounded-xl -z-10 opacity-90"></span>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs mt-1 font-medium">About</span>
        </button>
        <button 
          onClick={() => handleNavigation("skills")}
          className={`flex flex-col items-center relative px-4 py-2 transition-all duration-300 ${
            activeSection === "skills" 
              ? "text-white" 
              : "text-gray-300 hover:text-gray-100"
          }`}
        >
          {activeSection === "skills" && (
            <span className="absolute inset-0 bg-gradient-to-r from-[#7042f8] to-[#8d6afb] rounded-xl -z-10 opacity-90"></span>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="text-xs mt-1 font-medium">Skills</span>
        </button>
        <button 
          onClick={() => handleNavigation("projects")}
          className={`flex flex-col items-center relative px-4 py-2 transition-all duration-300 ${
            activeSection === "projects" 
              ? "text-white" 
              : "text-gray-300 hover:text-gray-100"
          }`}
        >
          {activeSection === "projects" && (
            <span className="absolute inset-0 bg-gradient-to-r from-[#7042f8] to-[#8d6afb] rounded-xl -z-10 opacity-90"></span>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-xs mt-1 font-medium">Projects</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
