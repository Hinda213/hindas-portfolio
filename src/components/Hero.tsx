import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-slate-200 min-h-screen flex flex-col justify-center items-center text-center bg-secondary">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-primary"
      >
        Hi, I’m Hinda
      </motion.h1>
      <p className="text-gray-700 max-w-xl font">
        I build modern, responsive web applications using React, TypeScript, and
        Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-primary text-purple-800 font-semibold rounded-md hover:bg-indigo-600 transition"
      >
        See My Work
      </a>
    </section>
  );
};

export default Hero;
