import React from "react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";

const experienceData = [
  {
    title: "Frontend Developer (Intern)",
    company: "Ezitech Institue",
    year: "Jan 2023 - June 2023",
    description:
      "Built modern React UI components, improved site performance, and collaborated on projects using Tailwind CSS and APIs.",
     
  },
  {
    title: "Reactjs Developer and International Management Consultant",
    company: "WestMid.UK",
    year: "August 2023 - August 2024",
    description:
      "Created responsive websites using react for comapny, worked on international Management and shuffle work and communicate with international officers for shifts.",
  },

  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    year: "Present",
    description:
      "Created responsive websites for small businesses using React, Tailwind CSS, and Firebase.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white dark:bg-[#111827]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          <MdWork className="inline-block text-purple-600 dark:text-purple-400 mr-2" />
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-[#1f2937] p-6 rounded-xl shadow-md border-l-4 border-purple-600 dark:border-purple-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {exp.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
