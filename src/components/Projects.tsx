import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Todo App",
    description:
      "A minimalist and intuitive todo list app to help you stay organized.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    liveUrl: "https://todo-pro-hanuda.netlify.app/",
    githubUrl: "https://github.com/Hinda213/todo-pro-hanuda",
  },
  {
    title: "Finance Tracker Dashboard",
    description:
      "A React + TypeScript finance tracker with dark mode, analytics, and full CRUD functionality.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    liveUrl: "https://finance-tracker-crud.netlify.app//",
    githubUrl: "https://github.com/Hinda213/Finance-Tracker",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-slate-50 shadow-lg dark:bg-gray-700 transition-colors"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-3xl font-bold mb-4 text-black dark:text-indigo-300 drop-shadow-lg">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
