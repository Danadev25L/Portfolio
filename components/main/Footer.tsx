import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#03001417] backdrop-blur-md border-t border-[#7042f861] text-gray-200 py-8 px-4 mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/NavLogo.png" 
              alt="Dana Dev Logo" 
              width={40} 
              height={40}
            />
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7042f8] to-[#8d6afb]">
              Dana Bestun
            </h2>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 my-6">
          <Link href="https://github.com/danabestun" className="transform transition-transform hover:scale-110">
            <div className="p-3 rounded-full bg-[#0300145e] hover:bg-[#7042f861] transition-colors duration-300">
              <RxGithubLogo className="text-xl" />
            </div>
          </Link>
          
          <Link href="#" className="transform transition-transform hover:scale-110">
            <div className="p-3 rounded-full bg-[#0300145e] hover:bg-[#7042f861] transition-colors duration-300">
              <RxLinkedinLogo className="text-xl" />
            </div>
          </Link>
          
          <Link href="https://www.instagram.com/danabestun/" className="transform transition-transform hover:scale-110">
            <div className="p-3 rounded-full bg-[#0300145e] hover:bg-[#7042f861] transition-colors duration-300">
              <FaInstagram className="text-xl" />
            </div>
          </Link>
          
          <Link href="mailto:Danamadridi7717@gmail.com" className="transform transition-transform hover:scale-110">
            <div className="p-3 rounded-full bg-[#0300145e] hover:bg-[#7042f861] transition-colors duration-300">
              <FaEnvelope className="text-xl" />
            </div>
          </Link>
        </div>
        
        {/* Nav Links */}
        <div className="flex justify-center gap-6 text-sm mb-6">
          <Link href="#about-me" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dana Bestun. All rights reserved</p>
          <p className="text-xs mt-2">
            <span className="text-[#7042f8]">♥</span> Modern web developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;