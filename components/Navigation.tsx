"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isRouting && <Transition key={path} />}
      </AnimatePresence>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[50] w-[320px] sm:w-[60%] md:w-[25%] max-h-[70px] rounded-full flex justify-between items-center border bg-black/80 backdrop-blur-md border-white/20 px-4 py-3">
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="flex-1 flex justify-center items-center p-2 group"
          >
            <nav.icon
              className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-colors duration-200 ${
                path === nav.link
                  ? "text-purple-400"
                  : "text-gray-400 group-hover:text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
