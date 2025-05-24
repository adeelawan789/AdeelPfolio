import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base mb-4">
          &copy; {new Date().getFullYear()} Adeel | All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/adeelawan789"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adeel-tariq-8797a9225/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
