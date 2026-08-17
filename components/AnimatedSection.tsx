"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType = "fade-in-up" | "fade-in-left" | "fade-in";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  animation?: AnimationType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? undefined : 0,
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      <div
        className={visible ? `animate-${animation}` : ""}
        style={{ animationDelay: `${delay}s`, animationFillMode: "both" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
