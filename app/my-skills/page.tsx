"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import AnimatedSection from "@/components/AnimatedSection";

const skillGroups = [
  {
    label: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: ["Next js 14", "TypeScript", "Tailwind Css", "Html 5", "JavaScript"],
  },
  {
    label: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: ["Django", "Node js", "Go"],
  },
  {
    label: "Mobile",
    color: "from-purple-500 to-violet-500",
    skills: ["Flutter"],
  },
  {
    label: "Database & Cloud",
    color: "from-orange-500 to-red-500",
    skills: ["Mongo db", "Stripe Payment", "Azure"],
  },
];

const Page = () => {
  return (
    <div className="page-bg bg-cover bg-center py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 items-center">

        {/* Header */}
        <AnimatedSection className="text-center">
          <h1 className="font-bold text-white text-[32px] sm:text-[44px] md:text-[54px] leading-tight mb-4">
            Skills{" "}
            <span className="gradient-text-animated">&amp; Technologies</span>
          </h1>
          <p className="text-gray-400 text-[16px] sm:text-[18px] max-w-xl mx-auto">
            5+ years working across the full stack — from pixel-perfect UIs to
            scalable APIs and mobile apps.
          </p>
        </AnimatedSection>

        {/* Skill groups */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <AnimatedSection key={group.label} delay={gi * 0.1} className="w-full">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${group.color}`} />
                  <h2 className="text-white font-semibold text-lg">{group.label}</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skillName) => {
                    const skill = SkillData.find((s) => s.name === skillName);
                    if (!skill) return null;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-3 py-2"
                      >
                        <Image
                          src={skill.Image}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-800" />

        {/* Carousel section */}
        <AnimatedSection className="w-full flex flex-col gap-8">
          <p className="text-center text-gray-500 text-sm tracking-widest uppercase">
            All technologies
          </p>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 4, spaceBetween: 24 },
              640: { slidesPerView: 5, spaceBetween: 24 },
              768: { slidesPerView: 6, spaceBetween: 28 },
            }}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            modules={[Autoplay]}
            className="w-full"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="text-gray-500 text-[10px] text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 4, spaceBetween: 24 },
              640: { slidesPerView: 5, spaceBetween: 24 },
              768: { slidesPerView: 6, spaceBetween: 28 },
            }}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            speed={5000}
            modules={[Autoplay]}
            className="w-full"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="text-gray-500 text-[10px] text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Page;
