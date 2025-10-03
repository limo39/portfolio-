import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] sm:h-[100px] bg-transparent flex justify-between items-center px-4 sm:px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <a href="/">
          <h1 className="text-white text-[18px] sm:text-[20px] md:text-[25px] font-semibold">
            Limo Kiprono{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              io{" "}
            </span>
          </h1>
        </a>
      </div>

      <div className="flex flex-row gap-3 sm:gap-5 mb-2">
        {Socials.map((social) => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="sm:w-[28px] sm:h-[28px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
