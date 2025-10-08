"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface Props {
    image: string;
    title: string;
    text: string;
    githubUrl?: string;
    technologies?: string[];
    status?: string;
}

const ProjectCard = ({ image, title, text, githubUrl, technologies, status}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip(e: React.MouseEvent) {
        // Don't flip if clicking on GitHub link
        if ((e.target as HTMLElement).closest('.github-link')) {
            return;
        }
        
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-full max-w-[450px] h-[250px] sm:h-[280px] rounded-md cursor-pointer mx-auto'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40'/>
                    
                    {/* Status Badge */}
                    {status && (
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          status === 'Completed' 
                            ? 'bg-green-500 bg-opacity-80 text-white' 
                            : 'bg-yellow-500 bg-opacity-80 text-black'
                        }`}>
                          {status}
                        </span>
                      </div>
                    )}
                    
                    {/* GitHub Icon */}
                    {githubUrl && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-black bg-opacity-60 rounded-full p-2">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    <div className='absolute inset-0 w-full h-full text-[16px] sm:text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    Click to learn more &gt;
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-60 z-[-1]'/>
                  <div className='flex flex-col justify-between h-full py-3 z-[30]'>
                    <div>
                      <h1 className='text-white text-xl sm:text-2xl font-semibold mb-3'>{title}</h1>
                      <p className='text-gray-200 text-[14px] sm:text-[16px] leading-relaxed mb-4'>
                          {text}
                      </p>
                      
                      {/* Technologies */}
                      {technologies && (
                        <div className='flex flex-wrap gap-1 mb-4'>
                          {technologies.slice(0, 3).map((tech, index) => (
                            <span
                              key={index}
                              className='bg-blue-500 bg-opacity-30 text-blue-200 px-2 py-1 rounded text-xs'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* GitHub Link */}
                    {githubUrl && (
                      <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors self-start"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </Link>
                    )}
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard