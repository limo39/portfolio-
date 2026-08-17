"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="page-bg relative overflow-hidden flex items-center min-h-screen">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-purple-600 opacity-20 top-[-100px] left-[-150px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-red-500 opacity-15 bottom-[-80px] right-[-100px]" />
      <div className="glow-orb w-[300px] h-[300px] bg-blue-500 opacity-10 top-[40%] left-[40%]" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-16 md:px-24 lg:px-40 pt-24 pb-32 md:py-0 gap-12">
        {/* Left: text */}
        <div className="flex flex-col gap-6 max-w-[600px] w-full animate-fade-in-up">
          {/* Availability badge */}
          <div className="flex items-center gap-2 w-fit bg-gray-900 border border-gray-700 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
              Available for work
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[44px] md:text-[56px] text-white font-bold leading-tight">
            Make anything possible with{" "}
            <span className="gradient-text-animated">Software Development</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Hi, I&apos;m{" "}
            <span className="text-white font-semibold">Limo Kiprono</span> — a
            full stack Software Engineer based in{" "}
            <span className="text-white font-semibold">Nairobi, Kenya</span>{" "}
            with 5+ years of experience building web apps, mobile apps, and
            developer tools.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 py-4 border-t border-gray-800">
            <div>
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-gray-500 text-sm">Years experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-gray-500 text-sm">Projects shipped</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-gray-500 text-sm">Languages</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/my-projects"
              className="bg-gradient-to-r from-purple-600 to-red-500 hover:from-purple-500 hover:to-red-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/30"
            >
              View Projects
            </Link>
            <Link
              href="/my-skills"
              className="bg-transparent border border-gray-600 hover:border-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:text-purple-300"
            >
              My Skills
            </Link>
            <Link
              href="/contact-me"
              className="bg-transparent border border-gray-600 hover:border-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:text-blue-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: profile image */}
        <div
          className="hidden md:flex flex-shrink-0 relative animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-red-500 opacity-30 blur-2xl scale-110" />
          <div className="relative w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-2 border-gray-700 shadow-2xl shadow-purple-900/40">
            <Image
              src="/arap.jpg"
              alt="Limo Kiprono"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </main>
  );
}
