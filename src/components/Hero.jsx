import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/Adeel2.jpg"; 
import VanillaTilt from "vanilla-tilt";
import { useRef } from "react";

const roles = [
  "Frontend Developer",
  "React.js Enthusiast",
  "AI Innovator",
  "Problem Solver",
  "Creative Coder",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[250px] h-[250px] bg-indigo-400 rounded-full opacity-10 blur-3xl"
        animate={{ x: [0, 80, -80, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-pink-400 rounded-full opacity-10 blur-3xl"
        animate={{ x: [0, -80, 80, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="z-10 max-w-6xl w-full flex flex-col-reverse md:flex-row items-center gap-10 py-12">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 flex-1 px-2 sm:px-6">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Adeel
          </motion.h1>

          <div className="h-10 sm:h-12 overflow-hidden relative text-blue-300 text-lg sm:text-xl font-semibold">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[currentRole]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full text-center md:text-left"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            className="text-gray-300 max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Passionate about building intelligent user interfaces that make life easier.
          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/10qBb-4tYKL2ArIEEs1DNW4HNt3MeY3uU/view?usp=drive_link"
            download
            className="inline-block mt-6 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 transition text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* 3D Profile Image Section */}
        <motion.div
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          ref={imageRef}
        >
          <img
            src={profileImage}
            alt="Adeel"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
