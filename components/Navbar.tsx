import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[70px] sm:h-[80px] bg-black/60 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-4 sm:px-10 md:px-20">
      <Link href="/">
        <h1 className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-semibold tracking-tight">
          Limo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            Kiprono
          </span>
        </h1>
      </Link>

      <div className="flex flex-row gap-4 sm:gap-5 items-center">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={22}
              height={22}
              className="sm:w-[24px] sm:h-[24px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
