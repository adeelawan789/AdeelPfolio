import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import custLogo from "../assets/custlogo.jpg"; // Make sure the path is correct

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Capital University of Science and Technology",
    year: "2017 - 2023",
    details:
      "Gained strong foundational and practical skills in full-stack development, algorithms, software architecture, and agile project management through hands-on projects and academic excellence.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white"
        >
          <FaGraduationCap className="inline-block mr-2 text-purple-600 dark:text-purple-400" />
          Education
        </motion.h2>

        {/* Education Card */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 md:p-6 border-l-4 border-purple-500 dark:border-purple-400"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Logo */}
                <img
                  src={custLogo}
                  alt="University Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md shadow-md"
                />

                {/* Text */}
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {edu.year}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
