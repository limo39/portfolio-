"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/constants/blogData";

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

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
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
