"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="hero-badge py-2 px-5 inline-flex rounded-lg"
      >
        <span className="text-[#b49bff] text-sm font-medium">
          Built with modern stacks: React, Next.js, TypeScript, Node.
        </span>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-4 text-center mb-3'
      >
        Making apps with modern technologies
      </motion.div>
      <motion.p
        variants={slideInFromRight(0.5)}
        className='text-gray-300 text-lg mb-10 mt-2 text-center max-w-xl'
      >
        Security-conscious development when handling sensitive data.
      </motion.p>
    </div>
  )
}

export default SkillText