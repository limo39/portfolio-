"use client";

import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div className="page-bg bg-center bg-cover py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h1 className="font-bold text-white text-[32px] sm:text-[44px] md:text-[54px] mb-4">
            My{" "}
            <span className="gradient-text-animated">Projects</span>
          </h1>
          <p className="text-gray-400 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Explore my portfolio of web applications, mobile apps, and
            open-source projects. Click any card to learn more, then visit the
            source on GitHub.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[95%] sm:max-w-[90%] w-full mx-auto">
          {Projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                text={project.text}
                image={project.src}
                githubUrl={project.githubUrl}
                technologies={project.technologies}
                status={project.status}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
