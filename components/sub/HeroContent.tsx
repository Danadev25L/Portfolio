"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center w-full z-[20] gap-16 lg:gap-28 xl:gap-36"
    >
      {/* Left Section */}
      <div className="flex flex-col gap-5 justify-center text-center lg:text-start w-full lg:w-1/2 px-4 md:px-8">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="hero-badge py-3 px-6 sm:px-8 flex items-center justify-center lg:justify-start rounded-lg mx-auto lg:mx-0 max-w-full sm:max-w-md lg:max-w-full"
        >
          <span className="text-[#b49bff] text-xl sm:text-2xl font-medium">
            Full-stack software engineer
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          <span>
            Design.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Build. Ship.
            </span>
          </span>
          <span className="text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            I turn ideas into software that works.
          </span>
        </motion.div>

        {/* Hero Description */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-6 max-w-full lg:max-w-[600px] mx-auto lg:mx-0 space-y-3"
        >
          <p>
            I&apos;m Dana, a full-stack software engineer. I work with React, Next.js, TypeScript, and Node to build applications that are fast, maintainable, and built to last.
          </p>
          <p>
            Whether it&apos;s a product for a startup or a system for a team, I focus on clean code, clear architecture, and shipping things that people actually use.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
        >
          <MotionLink
            href="#projects"
            className="py-3 px-8 text-lg button-primary text-center text-white cursor-pointer rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            See my work
          </MotionLink>
          <MotionLink
            href="#resume"
            className="py-3 px-8 text-lg border border-[#7042f88b] text-gray-200 rounded-lg font-medium hover:bg-[#7042f82a] transition-colors"
          >
            Resume
          </MotionLink>
        </motion.div>

        {/* Tech stack line */}
        <motion.p
          variants={slideInFromLeft(1.1)}
          className="text-gray-400 text-sm mt-6 max-w-full lg:max-w-[600px] mx-auto lg:mx-0"
        >
          React · Next.js · TypeScript · Node.js · Tailwind · PostgreSQL · MongoDB
        </motion.p>
      </div>

      {/* Right Section - Large Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 lg:min-h-[500px]"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={1000}
          width={1000}
          className="w-full max-w-[520px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[820px] xl:max-w-[960px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
