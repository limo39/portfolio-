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
              <div
                key={index}
                className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.text}
                  </p>
                </div>
              </div>
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