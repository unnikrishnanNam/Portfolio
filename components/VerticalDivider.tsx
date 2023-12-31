"use client";
import { motion } from "framer-motion";
import React from "react";

const VerticalDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
      className="bg-gray-200 h-16 w-1 my-24 rounded-full hidden sm:block"
    ></motion.div>
  );
};

export default VerticalDivider;
