"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/constants/blogData";
import AnimatedSection from "@/components/AnimatedSection";

const BlogPage = () => {
  return (
    <div className="page-bg bg-cover bg-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h1 className="font-bold text-white text-[32px] sm:text-[44px] md:text-[54px] mb-4">
            My{" "}
            <span className="gradient-text-animated">Blog</span>
          </h1>
          <p className="text-gray-400 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
            Sharing my journey in software development, projects, and insights
            from the tech world.
          </p>
        </AnimatedSection>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.07}>
              <article className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-500/20 text-purple-300 border border-purple-500/20 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-600 border-t border-gray-800 pt-4">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div className="relative overflow-hidden rounded-2xl p-8 sm:p-12 text-center bg-gray-900 border border-gray-800">
            <div className="glow-orb w-64 h-64 bg-purple-600 opacity-20 top-[-40px] left-[-40px]" />
            <div className="glow-orb w-64 h-64 bg-red-500 opacity-15 bottom-[-40px] right-[-40px]" />
            <div className="relative z-10">
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-6 max-w-md mx-auto">
                Interested in collaborating or have questions about my projects?
              </p>
              <Link
                href="/contact-me"
                className="inline-block bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-500 hover:to-red-400 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/30"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPage;
