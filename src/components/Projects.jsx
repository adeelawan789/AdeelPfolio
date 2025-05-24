import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdFolder } from "react-icons/md";  // Project folder icon
import shopMeLogo from "../assets/images/shopMeLogo.png";
import ReactMaterialDashboard from "../assets/images/ReactMaterialDashboard.png";
import AIsummizerphoto from "../assets/images/AIsummizerphoto.png";
import VirtualRealityLandingPage from "../assets/images/VirtualRealityLandingPage.png";
import MountainTravel from "../assets/images/MountainTravel.png";
import tourlyphoto from "../assets/images/tourlyphoto.png";

const projects = [
  {
    name: "ShopMe Ecommerce",
    description:
      "ShopMe is an animated ecommerce site with cart functionality, fully responsive with smooth animations.",
    repoLink: "https://github.com/adeelawan789/shopMe_Ecommerce",
    deployLink: "https://shop-me-ecommerce-three-tan.vercel.app/",
    image: shopMeLogo,
  },
  {
    name: "React Material Dashboard",
    description: "A modern dashboard built with React and Material UI.",
    repoLink: "https://github.com/adeelawan789/ReactMaterialDashboard",
    deployLink: "https://react-material-dashboard-flame.vercel.app/",
    image: ReactMaterialDashboard,
  },
  {
    name: "AI Summarizer",
    description: "Summarize articles using AI (OpenAI API).",
    repoLink: "https://github.com/adeelawan789/reactjsAIsummirizer",
    deployLink: "https://reactjs-a-isummirizer.vercel.app/",
    image: AIsummizerphoto,
  },
  {
    name: "Virtual Reality Landing Page",
    description: "A visually stunning landing page for VR products.",
    repoLink: "https://github.com/adeelawan789/VirtualRealityLandingPage",
    deployLink: "https://virtual-reality-landing-page-rho.vercel.app/",
    image: VirtualRealityLandingPage,
  },
  {
    name: "Mountain Travel Page",
    description: "A beautiful travel landing page with animations.",
    repoLink: "https://github.com/adeelawan789/TravePageAnimated",
    deployLink: "https://trave-page-animated.vercel.app/",
    image: MountainTravel,
  },
  {
    name: "Tourly Clone",
    description: "Clone of a travel agency site with animated scroll effects.",
    repoLink: "https://github.com/adeelawan789/TourlyClone",
    deployLink: "https://tourly-clone.vercel.app/",
    image: tourlyphoto,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="my-20 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-12 text-center text-white flex justify-center items-center gap-3"
      >
        <MdFolder className="text-purple-600 dark:text-purple-400 text-5xl" />
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(({ name, description, repoLink, deployLink, image }) => (
          <motion.div
            key={name}
            className="bg-[#1e1e2f] rounded-xl shadow-md hover:shadow-purple-700 transition duration-300 overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            {image && (
              <a href={deployLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={`${name} preview`}
                  className="w-full h-48 object-cover"
                />
              </a>
            )}

            <div className="p-6">
              <h3 className="text-white text-2xl font-bold mb-3 hover:underline hover:decoration-purple-500 transition">
                {name}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed">{description}</p>

              <div className="flex space-x-6 mt-4">
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition"
                >
                  <FaGithub className="text-purple-500" size={20} />
                  <span className="text-sm font-medium">GitHub Repo</span>
                </a>
                <a
                  href={deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 transition"
                >
                  <FiExternalLink className="text-purple-500" size={20} />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
