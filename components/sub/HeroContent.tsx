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
      className="flex flex-col lg:flex-row items-center justify-center w-full z-[20] gap-8"
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
          className="flex flex-col gap-4 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-6 max-w-full lg:max-w-[600px] mx-auto lg:mx-0"
        >
          Hi I&apos;m Dana. A Full Stack Software Engineer with experience in Website,
          and Software development. Check out my projects and skills.
        </motion.p>

        {/* CTA Button */}
        <MotionLink
          href="#projects"
          variants={slideInFromLeft(1)}
          className="py-3 px-8 text-lg button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0 block font-medium hover:opacity-90 transition-opacity"
        >
          Learn More!
        </MotionLink>
      </div>

      {/* Right Section - Larger Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={550}
          width={550}
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
