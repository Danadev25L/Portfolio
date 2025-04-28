"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Hover animation for the skill icon
  const hoverAnimation = {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={containerVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover={hoverAnimation}
      className="relative p-4 bg-[#0A0A0A]/40 backdrop-blur-sm rounded-xl border border-[#2A2A2A] flex items-center justify-center group"
    >
      {/* Skill icon with subtle glow effect */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <Image
            src={src}
            width={width}
            height={height}
            alt='Skill icon'
            className="object-contain w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] drop-shadow-lg"
          />
        </div>
      </div>
      
      {/* Subtle animated pulse dot */}
      <motion.div 
        className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </motion.div>
  )
}

export default SkillDataProvider