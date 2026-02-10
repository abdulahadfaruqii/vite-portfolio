const ProjectCard = ({
  image,
  title,
  description,
  techStack = [],
  liveLink,
}) => {
  return (
    <div className="max-w-140 rounded-2xl linear-gradient-to-br from-[#0b0f2a] to-[#050816] p-4 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
      {/* Image Section */}
      <div className="relative rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-55 object-cover" />
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        <h3 className="text-white text-3xl font-bold">{title}</h3>

        <p className="text-gray-400 text-xl leading-relaxed text-left">
          {description}
        </p>

        {/* Tech Icons */}
        <div className="flex items-center gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full bg-[#0f172a] flex items-center justify-center"
            >
              <img src={tech.icon} alt={tech.name} className="w-5" />
            </div>
          ))}
        </div>

        {/* Link */}
        {liveLink && (
          <div className="flex justify-end">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 text-sm font-medium flex items-center gap-1 hover:text-indigo-300 transition"
            >
              Check Live Site
              <span>↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
