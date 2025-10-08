"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/constants";
import { blogPosts, featuredRepos, githubStats } from "@/constants/blogData";

const BlogPage = () => {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className="min-h-screen w-screen bg-cover bg-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-semibold text-white text-[32px] sm:text-[40px] md:text-[50px] mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Blog
            </span>
          </h1>
          <p className="text-gray-400 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
            Sharing my journey in software development, projects, and insights from the tech world.
          </p>
        </div>

        {/* GitHub Section */}
        <div className="mb-16">
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0 text-center">
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{githubStats.totalRepos}</div>
                    <div className="text-sm text-gray-400">Repositories</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{githubStats.totalStars}</div>
                    <div className="text-sm text-gray-400">Stars</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{githubStats.totalForks}</div>
                    <div className="text-sm text-gray-400">Forks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{githubStats.contributions}</div>
                    <div className="text-sm text-gray-400">Contributions</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
                  Check out my GitHub
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-6">
                  Explore my open-source projects, contributions, and code repositories. 
                  I&apos;m passionate about building tools that make a difference.
                </p>
                <Link
                  href={githubStats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-6"
                >
                  <Image src="/github.png" alt="GitHub" width={20} height={20} />
                  Visit GitHub Profile
                </Link>
                
                {/* Featured Repositories */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">Featured Repositories</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredRepos.slice(0, 4).map((repo, index) => (
                      <Link
                        key={index}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-medium text-sm">{repo.name}</h4>
                          <span className="text-xs bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-1 rounded">
                            {repo.language}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs mb-2 line-clamp-2">{repo.description}</p>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>⭐ {repo.stars}</span>
                          <span>🍴 {repo.forks}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="mb-16">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 text-center">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Projects.map((project, index) => (
              <Link
                key={index}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  
                  {/* GitHub Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 bg-opacity-20 text-green-300 border border-green-500' 
                        : 'bg-yellow-500 bg-opacity-20 text-yellow-300 border border-yellow-500'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white text-xl font-bold group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.text}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View on GitHub */}
                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-sm font-medium">View on GitHub</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts Section */}
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 text-center">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map((post) => (
              <article
                key={post.id}
                className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-colors cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-500 bg-opacity-20 text-purple-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* View All Posts Button */}
          <div className="text-center mt-8">
            <button className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Posts
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-red-500 rounded-xl p-8">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4">
              Let&apos;s Connect!
            </h2>
            <p className="text-white text-base sm:text-lg mb-6 opacity-90">
              Interested in collaborating or have questions about my projects?
            </p>
            <Link
              href="/contact-me"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;