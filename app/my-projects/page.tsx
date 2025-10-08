"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundColor: "black"}}
     className='w-screen min-h-screen bg-center bg-cover py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-semibold text-white text-[32px] sm:text-[40px] md:text-[50px] mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and open-source projects. 
            Click on any project to view the source code on GitHub.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[95%] sm:max-w-[90%] w-full mx-auto'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
              status={project.status}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Page