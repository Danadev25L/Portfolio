"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Section */}
      <div className="flex flex-col gap-5 justify-center m-auto text-center lg:text-start w-full lg:w-1/2">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] sm:mt-0 mt-[140px] px-[70px] border border-[#7042f88b] opacity-[0.9] hidden lg:flex items-center justify-center lg:justify-start"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[17px] sm:text-[30px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Hero Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-full lg:max-w-[600px]"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-4 lg:my-5 max-w-full lg:max-w-[600px]"
        >
          Hi Iam Dana  A Full Stack Software Engineer with experience in Website,
          and Software development. Check out my projects and skills.
        </motion.p>

        {/* CTA Button */}
        <Link href="#projects">
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 text-sm sm:text-base md:py-3 md:px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] sm:max-w-[200px] mx-auto lg:mx-0"
        >
          Learn More!
        </motion.a>
        </Link>
      </div>

      {/* Right Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-auto flex justify-center items-center mt-10 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
          className="w-3/4 sm:w-auto max-w-full lg:max-w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
