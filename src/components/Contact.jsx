import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-transparent via-slate-900 to-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-center"
        >
          📬 Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-center mb-10"
        >
          I'd love to hear from you! Feel free to reach out through the form below.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white/30 hover:bg-white/40 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
