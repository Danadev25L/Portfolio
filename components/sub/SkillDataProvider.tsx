"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  name: string;
}

const SkillDataProvider = ({ src, width, height, index, name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Fast animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.03,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  }

  // Hover animation for the skill icon
  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.2 }
  }

  const isExternal = src.startsWith('http')

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={containerVariants}
      animate={inView ? "visible" : "hidden"}
      whileHover={hoverAnimation}
      className="relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center group min-w-[100px] min-h-[100px]"
    >
      {/* Skill icon with subtle glow effect */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-center">
          {imgError ? (
            // Fallback when image fails to load
            <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-white/10 rounded-lg">
              <span className="text-white text-xs font-medium text-center px-2">{name}</span>
            </div>
          ) : (
            <>
              {!imgLoaded && (
                <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-white/5 rounded-lg animate-pulse" />
              )}
              <Image
                src={src}
                width={width}
                height={height}
                alt={`${name} icon`}
                title={name}
                className={`object-contain drop-shadow-lg w-[70px] h-[70px] md:w-[80px] md:h-[80px] transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading={index < 6 ? "eager" : "lazy"}
                priority={index < 6}
                quality={90}
                onError={() => setImgError(true)}
                onLoad={() => setImgLoaded(true)}
                unoptimized={isExternal}
              />
            </>
          )}
        </div>
      </div>

      {/* Skill name tooltip on hover */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="text-white text-xs bg-black/50 px-2 py-1 rounded whitespace-nowrap">{name}</span>
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