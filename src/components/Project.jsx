import { useState, useEffect } from "react";
import { myProjects } from "../constants/index.js";

const ProjectItemRow = ({ project, onHover, onLeave }) => {
  return (
    <a
      href={project.href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-7 px-6 md:px-12 border-b border-neutral-900 hover:border-neutral-700/80 hover:bg-neutral-900/10 transition-colors duration-200 cursor-pointer w-full"
    >
      <div className="flex flex-col gap-1.5 z-10">
        <h3 className="text-xl md:text-2xl font-semibold text-neutral-100 group-hover:text-white transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-amber-500/90 tracking-wide">
          {project.tags?.[0]?.name || project.category || "Engineering Project"}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4 md:mt-0 text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-200 z-10 shrink-0">
        <span>Read More</span>
        <span className="transform transition-transform duration-200 group-hover:translate-x-1.5">
          →
        </span>
      </div>
    </a>
  );
};

const Projects = () => {
  const projectsList = Array.isArray(myProjects) ? myProjects : [];

  // Strictly ID 1 for Final Year Project
  const finalYearProject = projectsList.find((p) => p.id === 1);

  // All remaining projects for Selected Projects
  const selectedProjects = projectsList.filter((p) => p.id !== 1);

  // Floating hover preview state
  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-16 text-white" id="projects">
      {/* 1. FINAL YEAR PROJECT (ONLY HEADING AT THE TOP) */}
      <div className="w-full mb-16">
        <div className="px-6 md:px-12 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Final Year Project
          </h2>
        </div>

        <div className="w-full border-t border-neutral-900">
          {finalYearProject && (
            <ProjectItemRow
              project={finalYearProject}
              onHover={setHoveredProject}
              onLeave={() => setHoveredProject(null)}
            />
          )}
        </div>
      </div>

      {/* 2. SELECTED PROJECTS (BELOW FINAL YEAR PROJECT) */}
      <div className="w-full">
        <div className="px-6 md:px-12 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
        </div>

        <div className="w-full border-t border-neutral-900">
          {selectedProjects.map((project) => (
            <ProjectItemRow
              key={project.id}
              project={project}
              onHover={setHoveredProject}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>

      {/* FLOATING HOVER PREVIEW IMAGE */}
      {hoveredProject && hoveredProject.image && (
        <div
          className="pointer-events-none fixed z-50 hidden md:block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl transition-all duration-75 ease-out"
          style={{
            left: `${cursorPos.x + 30}px`,
            top: `${cursorPos.y - 110}px`,
            width: "320px",
            height: "200px",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <img
            src={hoveredProject.image}
            alt={hoveredProject.title}
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;