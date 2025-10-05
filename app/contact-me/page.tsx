"use client";

import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Socials } from "@/constants";

const Page = () => {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className="w-screen min-h-screen bg-cover bg-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-12">
          <h1 className="font-semibold text-white text-[32px] sm:text-[40px] md:text-[50px] mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <AnimatedSection delay={0.2} className="bg-gray-900 rounded-xl border border-gray-700 p-6 sm:p-8">
              <h2 className="text-white text-2xl font-bold mb-6">Let&apos;s Connect</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">kipronolimo39@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-400">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Media */}
            <AnimatedSection delay={0.4} className="bg-gray-900 rounded-xl border border-gray-700 p-6 sm:p-8">
              <h2 className="text-white text-2xl font-bold mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {Socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            {/* Availability Status */}
            <AnimatedSection delay={0.6} className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h2 className="text-white text-xl font-bold">Available for Work</h2>
              </div>
              <p className="text-white opacity-90 mb-4">
                I&apos;m currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                  Full Stack Development
                </span>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                  Mobile Apps
                </span>
                <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                  Web Applications
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} className="bg-gray-900 rounded-xl border border-gray-700 p-6 sm:p-8">
            <ContactForm />
          </AnimatedSection>
        </div>

        {/* FAQ Section */}
        <AnimatedSection delay={0.8} className="mt-16">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                What&apos;s your typical response time?
              </h3>
              <p className="text-gray-400">
                I usually respond to all inquiries within 24 hours. For urgent projects, 
                feel free to mention it in your message.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                Do you work with international clients?
              </h3>
              <p className="text-gray-400">
                Absolutely! I work with clients worldwide and am comfortable with 
                different time zones and communication preferences.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                What technologies do you specialize in?
              </h3>
              <p className="text-gray-400">
                I specialize in React, Next.js, Node.js, Python, Django, Flutter, 
                and Go. Check out my skills page for the complete list.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-700 p-6">
              <h3 className="text-white text-lg font-semibold mb-3">
                How do you handle project timelines?
              </h3>
              <p className="text-gray-400">
                I provide realistic timelines based on project scope and maintain 
                regular communication throughout the development process.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Page;
