"use client";

import { motion } from "framer-motion";

const heroVideo = "/hero.mp4";

export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-gray-100 p-8 relative pt-24">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.8)" }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute sm:w-3/4 w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl flex flex-col gap-4 items-center">
        <motion.p
          className="hero-text text-white md:text-6xl text-4xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scale Business to drive Results
        </motion.p>
        <motion.p
          className="hero-text text-gray-300 sm:text-sm text-base text-center md:w-1/2 w-4/5 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Manage all your data and workflows in one place. Automate processes,
          gain insights, and scale your business with ease.
        </motion.p>
      </div>
    </div>
  );
}
