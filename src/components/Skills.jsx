import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  
  SiRedux,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
      { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
      { name: "React", icon: <FaReact />, color: "#61DBFB" },
      { name: "Redux", icon: <SiRedux />, color: "#764abc" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    skills: [
      
      
      
      { name: "Firebase", icon: <SiFirebase />, color: "#FFA611" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
      { name: "GitHub", icon: <FaGithub />, color: "#171515" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
      { name: "Python", icon: <FaPython />, color: "#3776AB" },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-transparent via-slate-900 to-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          🚀 My Skills
        </motion.h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          A snapshot of my tools & technologies, organized by category.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            variants={cardAnim}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-blue-500/20 transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
              {group.title}
            </h3>
            <div className="grid grid-cols-3 gap-5">
              {group.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center text-center transition-all duration-200"
                >
                  <div
                    className="text-4xl sm:text-5xl mb-1"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
