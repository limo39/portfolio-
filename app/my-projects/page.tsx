"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundColor: "black"}}
     className='w-screen min-h-screen flex items-center justify-center bg-center bg-cover py-20 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[95%] sm:max-w-[90%] w-full'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Page