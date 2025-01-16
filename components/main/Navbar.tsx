import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo Section */}
        <Link href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden sm:block text-gray-300"> Dana Dev</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex w-[500px] h-full items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] md:px-[20px] py-[5px] md:py-[10px] rounded-full text-gray-200 text-sm md:text-base">
            <Link href="#about-me" className="cursor-pointer">
              About me
            </Link>
            <Link href="#skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
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

      {/* Mobile Menu */}
      <div className="lg:hidden w-full flex flex-row justify-around mt-2 bg-[#0300145e] text-gray-200 rounded-lg p-2 text-sm">
        <Link href="#about-me" className="cursor-pointer">
          About me
        </Link>
        <Link href="#skills" className="cursor-pointer">
          Skills
        </Link>
        <Link href="#projects" className="cursor-pointer">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
