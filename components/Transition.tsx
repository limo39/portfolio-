"use client";
import React from "react";
import { motion } from "framer-motion";

const panelVariants = {
  initial: { y: "100%" },
  animate: { y: "0%"  },
  exit:    { y: "-100%" },
};

const panels = [
  { bg: "#4b3792", z: 10, delay: 0.0 },
  { bg: "#3b2d71", z: 20, delay: 0.1 },
  { bg: "#2e2257", z: 30, delay: 0.2 },
];

const Transition = () => {
  return (
    <>
      {panels.map(({ bg, z, delay }) => (
        <motion.div
          key={bg}
          className="fixed inset-0 w-screen h-screen"
          style={{ backgroundColor: bg, zIndex: z }}
          variants={panelVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default Transition;
