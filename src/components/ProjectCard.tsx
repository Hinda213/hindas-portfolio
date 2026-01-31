type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl?: string;
  };
  
  const ProjectCard = ({
    title,
    description,
    tech,
    liveUrl,
    githubUrl,
  }: ProjectCardProps) => (
    <div className="bg-white dark:bg-indigo-950 rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center">
      <h3 className="text-xl font-semibold text-indigo-700 dark:text-yellow-200 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p>
      <div className="flex gap-2 justify-center flex-wrap mb-6">
        {tech.map((t) => (
          <span key={t} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
        >
          View App
        </a>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-indigo-600 text-indigo-600 dark:text-yellow-200 dark:border-yellow-200 px-4 py-2 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
  
  export default ProjectCard;