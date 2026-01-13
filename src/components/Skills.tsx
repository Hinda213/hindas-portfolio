import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";

import { SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", level: 87, icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", level: 80, icon: FaJs, color: "text-yellow-400" },
  { name: "React", level: 70, icon: FaReact, color: "text-cyan-400" },
  { name: "TypeScript", level: 60, icon: SiTypescript, color: "text-blue-600" },
  {
    name: "Tailwind CSS",
    level: 80,
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  { name: "Git & GitHub", level: 80, icon: FaGitAlt, color: "text-red-500" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white"
        >
          Skills
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className={`text-3xl ${skill.color}`} />
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-indigo-600"
                    />
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    {skill.level}% proficiency
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
