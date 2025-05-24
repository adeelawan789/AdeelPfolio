import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Adeel.Dev
        </motion.h1>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 dark:text-blue-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map(({ name, id }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <button
                onClick={() => handleScroll(id)}
                className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition font-medium"
              >
                {name}
              </button>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              ref={navRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100 }}
              className="fixed top-0 right-0 w-[75%] h-full bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-6 z-40 md:hidden"
            >
              {links.map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition text-left"
                >
                  {name}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
