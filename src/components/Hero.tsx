import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
    id="hero"
    className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-100 to-slate-400 dark:from-slate-500 dark:to-slate-700">
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6"
        >
          Hi, I’m <span className="text-indigo-600">Hinda</span> 👋
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-200 max-w-2xl mx-auto mb-10"
        >
          I’m a frontend developer specializing in building modern,
          high-performance web applications using{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-950">
            React, TypeScript, and Tailwind CSS
          </span>
          .
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-indigo-600 dark:bg-white text-white dark:text-indigo-600 dark:font-bold font-semibold hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-indigo-600 dark:border-indigo-200 text-indigo-600 dark:text-indigo-200 font-semibold hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
